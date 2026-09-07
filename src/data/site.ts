/*
 * All content for the site. Copy follows design/voice.md.
 * Every number here traces to a resume bullet with its qualifier intact.
 * DRAFT: first draft, not yet approved by Zack.
 */

export type Tool = { name: string; icon: string; hex: string };
export type Role = {
  company: string;
  dates: { start: string; end: string };
  role: string;
  paragraph: string;
  chips: string[];
  tools: Tool[];
  project?: { name: string; text: string; linkText: string; url: string };
};
export type Project = { name: string; text: string; linkText: string; url: string; tools: Tool[] };
export type Post = { title: string; date: string; url: string };

export const tools = {
  python: { name: "Python", icon: "python", hex: "#3776AB" },
  go: { name: "Go", icon: "go", hex: "#00ADD8" },
  django: { name: "Django", icon: "django", hex: "#092E20" },
  langchain: { name: "LangChain", icon: "langchain", hex: "#1C3C3C" },
  postgres: { name: "Postgres", icon: "postgresql", hex: "#4169E1" },
  dbt: { name: "dbt", icon: "dbt", hex: "#FF694B" },
  snowflake: { name: "Snowflake", icon: "snowflake", hex: "#29B5E8" },
  kafka: { name: "Kafka", icon: "apachekafka", hex: "#231F20" },
  aws: { name: "AWS", icon: "amazonwebservices", hex: "#FF9900" },
  gcp: { name: "Google Cloud", icon: "googlecloud", hex: "#4285F4" },
  docker: { name: "Docker", icon: "docker", hex: "#2496ED" },
  kubernetes: { name: "Kubernetes", icon: "kubernetes", hex: "#326CE5" },
  terraform: { name: "Terraform", icon: "terraform", hex: "#844FBA" },
  actions: { name: "GitHub Actions", icon: "githubactions", hex: "#2088FF" },
  datadog: { name: "Datadog", icon: "datadog", hex: "#632CA6" },
} satisfies Record<string, Tool>;

const t = tools;

export const site = {
  name: "Zack Petersen",
  email: "zpetersen78@gmail.com",
  resume: "https://zackcpetersen-resume.s3.us-west-2.amazonaws.com/resume.pdf",
  source: "https://github.com/zackcpetersen/zackcpetersen.github.io",
  links: [
    { label: "GitHub", url: "https://github.com/zackcpetersen" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/zackcpetersen/" },
    { label: "Medium", url: "https://medium.com/@zackcpetersen" },
    { label: "Resume", url: "https://zackcpetersen-resume.s3.us-west-2.amazonaws.com/resume.pdf" },
  ],
  readout: { low: 4226, high: 11253, legend: "4,226 ft is Salt Lake City. 11,253 ft is Lone Peak." },
  footer: "Made in Salt Lake City by Zack Petersen.",

  meta: {
    home: {
      title: "Zack Petersen, Senior Backend Engineer, Salt Lake City",
      description: "Senior backend engineer in Salt Lake City. Six years of backend and data work in Python, Go, and Postgres. Right now I build claims tooling at Reserv.",
    },
    work: {
      title: "Work | Zack Petersen",
      description: "Six years of backend and data work at Reserv, Merit, and Neutron Interactive: what I built, what it did, and three side projects with public code.",
    },
    writing: {
      title: "Writing | Zack Petersen",
      description: "Three tutorials on Medium: deploying a production Django app to Elastic Beanstalk in two parts, and regular expressions in Python and the terminal.",
    },
    about: {
      title: "About | Zack Petersen",
      description: "How I work, where I live, and how to reach me. Senior backend engineer in Salt Lake City, University of Utah, and most weekends in the Wasatch.",
    },
  },

  hero: {
    eyebrow: "Senior backend engineer / data and platform / Salt Lake City",
    headline: "I build the backend services and data pipelines a product depends on.",
    subhead:
      "Six years in Python, Go, and Postgres, on AWS and Google Cloud. Right now I am at Reserv, where I own the data side of Adjuster Copilot, an artificial intelligence (AI) tool for claims adjusters. We doubled claims accuracy and gave adjusters back 40+ hours a month.",
    cta: "See the work",
  },

  stack: {
    heading: "What I use day to day.",
    intro: "Most of it has run in a production system I was responsible for, and I would pick it again.",
    rows: [
      { label: "Languages and frameworks", tools: [t.python, t.go, t.django, t.langchain] },
      { label: "Data", tools: [t.postgres, t.dbt, t.snowflake, t.kafka] },
      { label: "Cloud and infrastructure", tools: [t.aws, t.gcp, t.docker, t.kubernetes, t.terraform] },
      { label: "Delivery and observability", tools: [t.actions, t.datadog] },
    ],
  },

  workHeading: "What I have been doing since 2020.",
  workBrief: [
    {
      company: "Reserv",
      dates: "Oct 2024 to now",
      text: "I own the data pipelines and warehouse models behind Adjuster Copilot: an AWS Textract pipeline that gets every claim document into the warehouse, and dbt models on top.",
    },
    {
      company: "Merit International",
      dates: "Jun 2022 to Oct 2024",
      text: "Platform team for the core Go services, from first deployment to more than 250,000 users. I rebuilt the notifications service from a prototype into infrastructure that can send millions of messages a day.",
    },
    {
      company: "Neutron Interactive",
      dates: "May 2020 to Jun 2022",
      text: "I led the move of a legacy monolith into Docker, built the GitHub Actions pipeline that cut release cycle times by 75%, and took our AWS setup from the console into Terraform.",
    },
  ],
  workBriefLink: "More on each role",

  workPageHeading: "What I built and what it did.",
  work: [
    {
      company: "Reserv",
      dates: { start: "Oct 2024", end: "now" },
      role: "Senior Backend Engineer, Data",
      paragraph:
        "Adjuster Copilot is the artificial intelligence (AI) tool Reserv's claims adjusters use. It doubled claims accuracy and gave adjusters back 40+ hours a month, and my part is the data underneath it. I built an AWS Textract pipeline that pulls the text out of every claim document and lands it in the warehouse, with dbt models on top, so the model has clean rows for 100% of claims. That was the plainest way to raise accuracy, because a missing or garbled row shows up as a wrong answer from the model. I also cut dbt runtimes by 28% and shrank our Docker images by up to 76%, which cut the vulnerabilities that shipped inside them.",
      chips: ["2x claims accuracy", "40+ hours/month back", "-28% dbt runtime"],
      tools: [t.python, t.aws, t.postgres, t.dbt, t.docker, t.langchain],
      project: {
        name: "Adjuster Copilot",
        text: "Reserv's AI tool for claims adjusters. I own the pipelines and warehouse models that get every claim document, parsed and clean, in front of the model.",
        linkText: "reserv.com",
        url: "https://www.reserv.com/",
      },
    },
    {
      company: "Merit International",
      dates: { start: "Jun 2022", end: "Oct 2024" },
      role: "Senior Backend Engineer, Platform",
      paragraph:
        "Merit runs on Go microservices, and I was on the platform team that took the core ones (authentication, notifications, data ingestion, graph management) from first deployment to more than 250,000 users. Services that call each other break in ways unit tests never see, so I expanded integration test coverage by 60% across every core service, and cross-service failures started showing up in the test suite instead of in production. I also built the integration that hooks Snowflake and Fivetran into the platform and syncs more than 3 million records a day. The notifications service is the one I am proudest of: it was a prototype when I picked it up, and I rebuilt it into infrastructure that can send millions of messages a day.",
      chips: ["250,000+ users", "3M+ records/day", "+60% integration tests"],
      tools: [t.go, t.postgres, t.kafka, t.snowflake, t.kubernetes, t.gcp, t.datadog],
      project: {
        name: "Merit Notifications",
        text: "The service behind every message Merit sends. I took it from a prototype to infrastructure that can send millions of messages a day.",
        linkText: "merits.com",
        url: "https://www.merits.com/",
      },
    },
    {
      company: "Neutron Interactive",
      dates: { start: "May 2020", end: "Jun 2022" },
      role: "Backend Engineer, then Senior Backend Engineer, Platform",
      paragraph:
        "I joined Neutron as a backend engineer and left as the senior engineer on the platform. In the first year I led the move of the legacy monolith into Docker so every environment ran the same image, shipped over 10 features for the software as a service (SaaS) platform, including the matching algorithm behind over 80% of company revenue, and wrote the unit and integration suites that took the system past 80% code coverage. In the second year I built the GitHub Actions continuous integration and delivery (CI/CD) pipeline from scratch, which cut release cycle times by 75%, put the platform on AWS Elastic Container Service (ECS), and moved our AWS setup out of the console and into Terraform. I also recruited and onboarded two junior engineers, which is what freed me up to focus on architecture.",
      chips: ["-75% release time", "80%+ code coverage", "2 engineers onboarded"],
      tools: [t.python, t.django, t.postgres, t.docker, t.aws, t.terraform, t.actions],
    },
  ] satisfies Role[],

  projectsIntro: "These three are my own. I built and ran each one end to end, and the code is on GitHub.",
  projects: [
    {
      name: "Kiyote",
      text: "Lead management software as a service (SaaS) for the education sector. Read it if you want to see how I structure a product from the data model up, Terraform and Docker included.",
      linkText: "github.com/zackcpetersen/kiyote",
      url: "https://github.com/zackcpetersen/kiyote",
      tools: [t.python, t.django, t.terraform, t.docker],
    },
    {
      name: "ai-code-reviewer",
      text: "A GitHub Action that runs an artificial intelligence (AI) review on every pull request and leaves its suggestions as comments. The first pass of most reviews is mechanical, and a model can do that pass before a person spends their time.",
      linkText: "github.com/zackcpetersen/ai-code-reviewer",
      url: "https://github.com/zackcpetersen/ai-code-reviewer",
      tools: [t.python, t.actions, t.docker],
    },
    {
      name: "timecard",
      text: "Time tracking and project management, built with Django and Vue.js on AWS, with tiered permissions, geolocation, and live reporting. It has processed over 30,000 entries since May 2021, which is longer than most side projects stay in production.",
      linkText: "github.com/zackcpetersen/timecard",
      url: "https://github.com/zackcpetersen/timecard",
      tools: [t.python, t.django, t.aws],
    },
  ] satisfies Project[],

  writing: {
    intro: "I write when I have just finished figuring something out that the docs did not cover, because that is when I still remember which parts were confusing.",
    posts: [
      { title: "Deploy a Production Django App With Elastic Beanstalk (Part 1)", date: "2020-12-11", url: "https://medium.com/better-programming/production-django-elastic-beanstalk-part1-6632c0d4956a" },
      { title: "Deploy a Production Django App With Elastic Beanstalk (Part 2)", date: "2020-12-11", url: "https://medium.com/better-programming/production-django-elastic-beanstalk-part2-4501caf7d8fb" },
      { title: "Your Guide to Regular Expressions in Python and Terminal", date: "2020-08-03", url: "https://medium.com/better-programming/your-guide-to-regular-expressions-in-python-terminal-b54d25cbe185" },
    ] satisfies Post[],
    moreLink: "More on Medium",
  },

  about: {
    heading: "How I work and where I am.",
    caption: "On a trail above the river, Wasatch Range",
    paragraphs: [
      "Before I write code for a pipeline I write down the tables it produces, the columns each one needs, and which downstream model reads them, because a pipeline with a clear contract is one I can hand to a teammate without a meeting. It is the same habit as the numbered steps in my tutorials: write the map first, then do the work in that order.",
      "I live in Salt Lake City, and when I am not at a keyboard I am usually on a trail in the Wasatch. The photo above is from one of those trails.",
      "I have a Bachelor of Science in Business from the University of Utah, class of 2017. It was not a computer science degree, so I learned to code the way I learn everything else: pick a project, break it into steps, and keep going until it is on the web. The business classes still get used, because I ask what a feature makes or costs before I look at the code.",
      "If you are hiring for backend or data work, want to talk through a pipeline, or have a regex you cannot read, email me. I read every message.",
    ],
  },

  sayHi: { heading: "Tell me what you are building.", text: "Email is the best way to reach me, and I write back." },
  notFound: { text: "There is nothing at this address.", linkText: "Back to the home page" },
};
