import { test, expect, type Page } from '@playwright/test';

const pages = ['/', '/work/', '/ai/', '/writing/', '/about/'];
const PRIMARY = { light: 'rgb(79, 70, 229)', dark: 'rgb(129, 140, 248)' };
const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;

const allReached = async (page: Page) => {
  const rows = page.locator('.row[data-node]');
  const n = await rows.count();
  for (let i = 0; i < n; i++) await expect(rows.nth(i)).toHaveClass(/reached/);
  return n;
};

test.describe('pages', () => {
  for (const path of pages) {
    test(`${path} renders, has no emoji, and its internal links resolve without redirects`, async ({ page, request }) => {
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await expect(page.locator('h1')).toBeVisible();
      const text = await page.locator('body').innerText();
      expect(text).not.toMatch(EMOJI);
      expect(text).not.toContain('—');
      const hrefs = await page.locator('a[href^="/"]').evaluateAll(as => as.map(a => (a as HTMLAnchorElement).getAttribute('href')!));
      for (const href of new Set(hrefs)) {
        const target = href.split('#')[0] || '/';
        const r = await request.get(target, { maxRedirects: 0 });
        expect(r.status(), `${href} from ${path}`).toBe(200);
      }
    });
  }

  test('assets that the head references exist', async ({ request }) => {
    for (const p of ['/favicon.svg', '/favicon-32.png', '/apple-touch-icon.png', '/site.webmanifest', '/og.png', '/fonts/Inter-latin.woff2', '/fonts/JetBrainsMono-latin.woff2', '/sitemap-index.xml', '/robots.txt']) {
      const r = await request.get(p);
      expect(r.status(), p).toBe(200);
    }
  });

  test('404 page is served for a missing path', async ({ page }) => {
    const res = await page.goto('/nope/');
    expect(res?.status()).toBe(404);
    await expect(page.locator('h1')).toContainText('nothing at this address');
  });
});

test.describe('theme', () => {
  test('toggle persists across reload', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    const before = await page.evaluate(() => matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    await page.locator('[data-theme-toggle]').click();
    const after = before === 'dark' ? 'light' : 'dark';
    await expect(html).toHaveAttribute('data-theme', after);
    await page.reload();
    await expect(html).toHaveAttribute('data-theme', after);
    const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(bg).toBe(after === 'dark' ? 'rgb(11, 11, 18)' : 'rgb(250, 250, 250)');
  });
});

test.describe('rail', () => {
  test('/work/ reaches its last node after scrolling to the bottom', async ({ page }) => {
    await page.goto('/work/');
    const rows = page.locator('.row[data-node]');
    await expect(rows.first()).toHaveClass(/reached/);
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await page.waitForTimeout(300);
    await expect(rows.last()).toHaveClass(/reached/);
    const reach = await page.locator('.rail-line').evaluate(el => el.style.getPropertyValue('--reach'));
    expect(Number(reach)).toBe(1);
  });

  test('a page shorter than the viewport is fully drawn on load', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 2400 });
    await page.goto('/writing/');
    await page.waitForTimeout(300);
    await allReached(page);
    const reach = await page.locator('.rail-line').evaluate(el => el.style.getPropertyValue('--reach'));
    expect(Number(reach)).toBe(1);
  });

  test('reduced motion renders every node filled', async ({ browser }) => {
    const ctx = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.goto('/work/');
    await allReached(page);
    await ctx.close();
  });

  test('with JavaScript off the page renders complete and filled', async ({ browser }) => {
    const ctx = await browser.newContext({ javaScriptEnabled: false });
    const page = await ctx.newPage();
    await page.goto('/');
    await expect(page.locator('html')).not.toHaveClass(/js/);
    const bg = await page.locator('.node').first().evaluate(el => getComputedStyle(el).backgroundColor);
    expect([PRIMARY.light, PRIMARY.dark]).toContain(bg);
    const transform = await page.locator('.rail-line').evaluate(el => getComputedStyle(el).transform);
    expect(['none', 'matrix(1, 0, 0, 1, 0, 0)']).toContain(transform);
    await ctx.close();
  });
});

test.describe('screenshots for a human look (not asserted)', () => {
  for (const width of [320, 375, 390, 1280]) {
    for (const theme of ['light', 'dark']) {
      test(`${width}px ${theme}`, async ({ page }, testInfo) => {
        test.skip(testInfo.project.name !== 'desktop', 'once is enough');
        await page.setViewportSize({ width, height: 900 });
        await page.goto('/');
        await page.evaluate(t => document.documentElement.setAttribute('data-theme', t), theme);
        await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
        await page.waitForTimeout(400);
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(200);
        const shot = await page.screenshot({ fullPage: true });
        await testInfo.attach(`home-${width}-${theme}.png`, { body: shot, contentType: 'image/png' });
      });
    }
  }
});
