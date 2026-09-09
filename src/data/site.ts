/*
 * All content for the site. Copy follows design/voice.md.
 * Every number here traces to a resume bullet or to the Reserv work
 * summary (September 2026) with its qualifier intact; see HANDOFF.md.
 */

export type Tool = { name: string; icon: string; hex: string };
export type Role = {
  company: string;
  dates: { start: string; end: string };
  role: string;
  paragraphs: string[];
  chips: string[];
  tools: Tool[];
  project?: { name: string; text: string; linkText?: string; url?: string };
};
export type Project = { name: string; text: string; linkText: string; url: string; tools: Tool[] };
export type Post = { title: string; date: string; url: string; blurb?: string };
export type Step = { title: string; text: string };

export const tools = {
  python: { name: "Python", icon: "python", hex: "#3776AB" },
  go: { name: "Go", icon: "go", hex: "#00ADD8" },
  django: { name: "Django", icon: "django", hex: "#092E20" },
  langgraph: { name: "LangGraph", icon: "langgraph", hex: "#7FC8FF" },
  langchain: { name: "LangChain", icon: "langchain", hex: "#1C3C3C" },
  claude: { name: "Claude Code", icon: "claude", hex: "#D97757" },
  cursor: { name: "Cursor", icon: "cursor", hex: "#000000" },
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
  github: { name: "GitHub", icon: "github", hex: "#181717" },
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
      description: "Senior backend engineer in Salt Lake City. I build and manage production backend systems, data pipelines, and LLM applications. Primary engineer behind Adjuster Copilot, Reserv's production LLM agent for claims adjusters.",
    },
    work: {
      title: "Work | Zack Petersen",
      description: "Six years of backend, data, and AI platform work at Reserv, Merit, and Neutron Interactive: what I built, what it did, and the personal repositories with public code.",
    },
    ai: {
      title: "How I build with Claude Code | Zack Petersen",
      description: "How I use Claude Code to build and maintain production software: the spec loop that records every decision, the rules the machine enforces, and agents that monitor production.",
    },
    writing: {
      title: "Writing | Zack Petersen",
      description: "Three tutorials on Medium: deploying a production Django app to Elastic Beanstalk in two parts, and regular expressions in Python and the terminal.",
    },
    about: {
      title: "About | Zack Petersen",
      description: "Background and contact. Senior backend engineer in Salt Lake City, University of Utah, and as much time on trails and rivers as I can get.",
    },
  },

  hero: {
    eyebrow: "Senior backend engineer, Salt Lake City",
    headline: "I build and manage production backend systems, data pipelines, and large language model (LLM) applications.",
    subhead:
      "Six years across Python, Go, and Postgres on AWS and Google Cloud. At Reserv I am the primary engineer behind Adjuster Copilot, the production LLM agent that claims adjusters use. I also built the company's generative artificial intelligence (AI) evaluation framework and LLM observability from scratch. Adjuster Copilot doubled claims accuracy and gives adjusters back 40+ hours a month.",
    cta: "See the work",
  },

  stack: {
    eyebrow: "Tools",
    heading: "What I work with",
    intro: "Everything here has run in production systems I was responsible for.",
    rows: [
      { label: "Languages and frameworks", tools: [t.python, t.go, t.django] },
      { label: "Data", tools: [t.postgres, t.dbt, t.snowflake, t.kafka] },
      { label: "Cloud and infrastructure", tools: [t.aws, t.gcp, t.docker, t.kubernetes, t.terraform] },
      { label: "Delivery and observability", tools: [t.actions, t.datadog] },
      { label: "AI", tools: [t.claude, t.langgraph, t.langchain, t.cursor] },
    ],
  },

  workHeading: "Where I have worked since 2020",
  workBrief: [
    {
      company: "Reserv",
      dates: "Oct 2024 to now",
      text: "I am the primary engineer behind Adjuster Copilot, Reserv's production LLM agent for claims adjusters: its tool suite, memory management, safety layer, evaluation framework, and observability. I also own the event-driven document pipeline and the carrier reporting platform.",
    },
    {
      company: "Merit International",
      dates: "Jun 2022 to Oct 2024",
      text: "I was on the platform team for the core Go microservices, which we scaled from first deployment to more than 250,000 users. I rebuilt the notifications service from a prototype into infrastructure that can send millions of messages a day.",
    },
    {
      company: "Neutron Interactive",
      dates: "May 2020 to Jun 2022",
      text: "I led the move of a legacy monolith into Docker, built the GitHub Actions continuous integration and delivery (CI/CD) pipeline that cut release cycle times by 75%, and replaced manual AWS console management with Terraform.",
    },
  ],
  workBriefLink: "More on each role",

  aiBrief: {
    eyebrow: "Building with AI",
    heading: "How I build with Claude Code",
    text: "I work primarily through Claude Code, with a setup built to make agent-written code safe to ship: every decision and convention lives in the repository, hooks enforce the rules that matter, and agents monitor production the way an on-call rotation would.",
    linkText: "How the workflow works",
    url: "/ai/",
  },

  workPageHeading: "Six years of backend and data platform work, newest first.",
  work: [
    {
      company: "Reserv",
      dates: { start: "Oct 2024", end: "now" },
      role: "Senior Backend Engineer, Data",
      paragraphs: [
        "I am the primary engineer behind Adjuster Copilot, Reserv's production large language model (LLM) agent for claims adjusters, working full-stack across four codebases. I built its suite of about 20 agent tools with human-in-the-loop approval, its conversation and memory management, and a safety and audit layer that validates every artificial intelligence (AI) generated message before it is sent and records every tool call. Adjuster Copilot doubled claims accuracy and gives adjusters back 40+ hours a month.",
        "In 2026 I rebuilt the agent's knowledge retrieval as an agentic loop, raising retrieval accuracy by 64.3 percentage points on de-identified production fixtures, and shipped it behind a feature-flag ramp with a kill switch. I led a coordinated four-repository protocol migration for the agent stack and root-caused the production memory failures it exposed. I also built the company's generative AI evaluation framework and LLM observability from scratch, including a shared de-identified benchmark dataset and the tracing that measured production LLM usage for the first time.",
        "On the data side, I built and then replaced the claim-document ingestion pipeline with an event-driven, idempotent design with dead-letter replay, which let us retire the original optical character recognition (OCR) integration. I own the pipeline that produces the bordereaux and loss-run reports that about 20 insurance carriers require, cut dbt model runtimes by 28%, reduced Docker image sizes by up to 76%, and built most of the team's Datadog alerting and the queue-depth-driven autoscaling that replaced manual capacity checks.",
      ],
      chips: ["2x claims accuracy", "+64.3 points retrieval accuracy", "40+ hours/month back"],
      tools: [t.python, t.langgraph, t.aws, t.postgres, t.kafka, t.dbt, t.docker, t.terraform, t.datadog],
      project: {
        name: "Adjuster Copilot",
        text: "The claims adjuster product at Reserv. I support it on call and own its evaluation and observability.",
        linkText: "reserv.com",
        url: "https://www.reserv.com/",
      },
    },
    {
      company: "Merit International",
      dates: { start: "Jun 2022", end: "Oct 2024" },
      role: "Senior Backend Engineer, Platform",
      paragraphs: [
        "Merit runs on Go microservices. On the platform team I took the core services (authentication, notifications, data ingestion, graph management) from first deployment to more than 250,000 users. I expanded integration test coverage by 60% across every core service so that cross-service failures surfaced in the test suite instead of in production, built the integration framework that connects Snowflake and Fivetran to the platform and syncs more than 3 million records a day, and rebuilt the notifications service from a prototype into production infrastructure that can send millions of messages a day.",
      ],
      chips: ["250,000+ users", "3M+ records/day", "+60% integration tests"],
      tools: [t.go, t.postgres, t.kafka, t.snowflake, t.kubernetes, t.gcp],
      project: {
        name: "Merit Notifications",
        text: "The service behind every message Merit sends.",
        linkText: "merits.com",
        url: "https://www.merits.com/",
      },
    },
    {
      company: "Neutron Interactive",
      dates: { start: "May 2020", end: "Jun 2022" },
      role: "Backend Engineer, then Senior Backend Engineer, Platform",
      paragraphs: [
        "I joined Neutron as a backend engineer and left as the senior engineer on the platform. In the first year I led the move of the legacy monolith into Docker, shipped over 10 features for the software as a service (SaaS) platform, including the matching algorithm behind over 80% of company revenue, and wrote the unit and integration suites that took the system past 80% code coverage. In the second year I built the GitHub Actions continuous integration and delivery (CI/CD) pipeline from scratch, cutting release cycle times by 75%, moved the platform onto AWS Elastic Container Service (ECS), and replaced manual AWS console management with Terraform. I also recruited and onboarded two junior engineers.",
      ],
      chips: ["-75% release time", "80%+ code coverage", "2 engineers onboarded"],
      tools: [t.python, t.django, t.postgres, t.docker, t.aws, t.terraform, t.actions],
      project: {
        name: "Kiyote",
        text: "Neutron's lead management SaaS for the education sector, and the platform this work went into.",
      },
    },
  ] satisfies Role[],

  projectsEyebrow: "Public code",
  projectsIntro: "Personal repositories, both public.",
  projects: [
    {
      name: "claude-setup",
      text: "My portable Claude Code configuration: the slash commands, hooks, and skills I install on every machine, including the model guard hook and the self-review plan gate described on the AI page. Machine-specific values are marked FILL IN.",
      linkText: "github.com/zackcpetersen/claude-setup",
      url: "https://github.com/zackcpetersen/claude-setup",
      tools: [t.claude, t.github],
    },
    {
      name: "timecard",
      text: "Time tracking and project management built with Django on AWS, with tiered permissions, geolocation, and live reporting. It ran from May 2021 into 2024 and processed over 30,000 entries. The Vue.js frontend lives in a separate repository.",
      linkText: "github.com/zackcpetersen/timecard",
      url: "https://github.com/zackcpetersen/timecard",
      tools: [t.python, t.django, t.aws],
    },
  ] satisfies Project[],

  ai: {
    eyebrow: "Building with agents",
    heading: "How I build with Claude Code",
    intro: [
      "I work primarily through Claude Code, with a setup built to make agent-written code safe to ship. The agent plans, implements, reviews, opens the pull request, and monitors continuous integration (CI). I decide what gets built, verify what ships, and own production.",
      "What the agent produces depends on the setup more than the model. Everything an agent needs to make the right decision lives in the repository, not in a conversation that ends. Hooks and scripts enforce the rules that matter. That is what keeps a largely agent-written codebase maintainable as it grows, instead of degrading into slop. Every change, large or small, lands through the same loop.",
    ],
    loop: {
      heading: "The loop, from ticket to production",
      lead: "The purpose of the loop is to record every decision, every major change, and anything else an agent needs in order to keep building the codebase correctly. Each step writes something down that the next step reads.",
      steps: [
        { title: "Interview, then spec.", text: "Before any feature, I interview the stakeholder until the behavior is unambiguous, write a spec, and get sign-off. The spec is the only context the implementer receives, so every ambiguity is resolved here rather than guessed at later." },
        { title: "Review the plan with fresh eyes.", text: "A hook blocks any plan until a separate agent with no conversation context has reviewed it. A model that reviews its own plan agrees with itself, so the reviewer never sees the conversation that produced the plan." },
        { title: "Implement from the spec alone.", text: "A fresh agent receives the spec and the repository conventions, nothing else. If the implementer cannot build the feature from the spec alone, the spec is incomplete and gets fixed before any code is written." },
        { title: "Diff the branch against the spec.", text: "A second fresh agent reports what the branch satisfied, what it violated, and what it silently added. The list of silent additions is what catches scope creep that a general code review would accept." },
        { title: "Verification before any claim.", text: "I run the verification commands and test the feature myself before the pull request opens. Neither the implementer's report nor the reviewer's counts as proof." },
        { title: "One review pass, then merge.", text: "Every pull request gets one constrained artificial intelligence (AI) review against a severity rubric. Each finding gets a written disposition in the pull request, and only accepted blockers get a fix pass, so the reasoning behind every change survives with the change." },
        { title: "Deploy and monitor.", text: "A merge to the main branch deploys to production. A read-only smoke suite drives the live site after every production deploy, and a failed run opens an incident on its own." },
      ] satisfies Step[],
    },
    rules: {
      heading: "What the machine enforces",
      lead: "Rules that have to hold across sessions go into a hook, a lint rule, or a permission list. An instruction the agent is expected to remember is not enforcement.",
      items: [
        { title: "Model guard.", text: "A hook denies any agent dispatch that does not name a model, so mechanical work such as test generation, renames, and documentation sweeps never silently inherits the most expensive model." },
        { title: "A single path to the database.", text: "The raw database command line tool is denied outright. The one allowed wrapper takes the target environment as its first argument, so a permission rule can distinguish local from cloud, and every cloud write requires a human at a terminal." },
        { title: "Feedback in the same turn.", text: "A post-edit hook lints migrations and checks that every file path a document references still exists. A failure returns to the agent as a blocking error, so it is fixed in the same session instead of in CI an hour later." },
        { title: "A manifesto with a tiebreak.", text: "Ten numbered design laws the agent reasons from when no rule covers the case, each with an example from the codebase. Lower numbers win, and an unresolvable conflict is escalated to a human instead of decided silently." },
        { title: "Decision records.", text: "Architecture decisions are recorded with evidence from the repository, and the state document is updated in the same pull request that changes the state it describes, so the next session starts from the current state of the system rather than a stale description of it." },
        { title: "One worktree per agent.", text: "Every agent task runs in its own git worktree on its own branch. Resources a worktree cannot isolate, such as the local database and migration numbering, have a single owner defined in a written contract." },
      ] satisfies Step[],
    },
    monitoring: {
      heading: "Agents on call",
      text: "Agents also watch production. They monitor Sentry, Slack, and customer support channels, triage what comes in, and open issues with the evidence attached, the way an on-call rotation at a larger company does.",
    },
    byHand: {
      heading: "What I do myself",
      text: "I verify and test every feature the agent builds to confirm it does exactly what was intended. Every production write, every secret, and every merge goes through me. Development is autonomous. Anything that touches production requires a human.",
    },
    takeIt: {
      heading: "The portable parts",
      text: "The pieces of this setup that are not specific to one codebase are public: the model guard hook, the self-review plan gate, the pull request triage command, the worktree manager, and a manifesto template, with machine-specific values marked FILL IN.",
      linkText: "github.com/zackcpetersen/claude-setup",
      url: "https://github.com/zackcpetersen/claude-setup",
    },
  },

  writing: {
    intro: "Three tutorials on Medium, each written after working through a problem the documentation did not cover.",
    posts: [
      { title: "Deploy a Production Django App With Elastic Beanstalk (Part 1)", date: "2020-12-11", url: "https://medium.com/better-programming/production-django-elastic-beanstalk-part1-6632c0d4956a", blurb: "From an empty machine to a Django app on Elastic Beanstalk, including the undocumented 502 on Amazon Linux 2." },
      { title: "Deploy a Production Django App With Elastic Beanstalk (Part 2)", date: "2020-12-11", url: "https://medium.com/better-programming/production-django-elastic-beanstalk-part2-4501caf7d8fb", blurb: "Static and media files on S3, environment variables, and a Postgres database." },
      { title: "Your Guide to Regular Expressions in Python and Terminal", date: "2020-08-03", url: "https://medium.com/better-programming/your-guide-to-regular-expressions-in-python-terminal-b54d25cbe185", blurb: "Regular expressions from zero, by taking a phone number expression apart one character at a time." },
    ] satisfies Post[],
    moreLink: "More on Medium",
  },

  about: {
    heading: "Background",
    captions: {
      trail: "The Firehole River, Yellowstone.",
      ridge: "Above Jackson Hole.",
      fishing: "A cutthroat from the Bob Marshall Wilderness in Montana.",
    },
    paragraphs: [
      "I have a Bachelor of Science in Business from the University of Utah (2017). I did not come up through a computer science program; I learned to code by building and shipping projects, and the business background still shapes how I work. I ask what a feature earns or costs before I look at the code.",
      "Most of what I know came from working through undocumented problems and writing down the exact path so the next person does not have to. That is where the Medium articles came from, and it is the same habit behind the rules and hooks my artificial intelligence (AI) agents run on.",
      "I live in Salt Lake City. When I am not working I am usually on a trail or a river. The photos here are from Yellowstone, Jackson Hole, and the Bob Marshall Wilderness in Montana.",
      "If you are hiring for backend, data, or AI platform work, or want to talk through a system, email me.",
    ],
    aiLinkText: "How I build with Claude Code",
  },

  sayHi: { heading: "Get in touch.", text: "Email is the best way to reach me, and I reply to every message." },
  notFound: { text: "There is nothing at this address.", linkText: "Back to the home page" },
};
