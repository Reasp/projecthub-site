// English dictionary: the source of meaning and the fallback (decision-1 п. 2). ru.ts covers the same keys.
export const en = {
  lang: 'en',
  siteName: 'ProjectHub',
  nav: {
    home: 'Home',
    download: 'Download',
    pricing: 'Pricing',
    compare: 'Compare',
    docs: 'Docs',
    github: 'GitHub',
    support: 'Donate ♥',
    switchLanguage: 'Русский',
    switchLanguageTitle: 'Switch to Russian',
    langCode: 'EN',
    languages: { en: 'English', ru: 'Русский' },
    languageMenu: 'Language',
    theme: 'Theme',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeSystem: 'System'
  },
  footer: {
    license: 'Open code under MIT; paid modules under a source-available license.',
    noTracking: 'No telemetry, no cookies, no trackers.',
    version: 'Current version',
    community: 'Community: coming soon',
    source: 'Source code',
    releases: 'Releases',
    support: 'Donate',
    sourceSoon: 'Source code: a public mirror of the open edition is coming'
  },
  hero: {
    badge: 'Open source · MIT · local-first',
    illustration: 'Illustration of the control room; the product screens are in the documentation.'
  },
  console: {
    title: 'projecthub · TASK-142 · 3 agents',
    task: 'TASK-142 · Merge queue for the team host',
    criteria: ['Checks run on the latest main', 'Review by someone other than the author', 'Cost per task is recorded'],
    agents: [
      { name: 'Claude Code', branch: 'u/anna/task-142' },
      { name: 'Codex', branch: 'u/max/task-142' },
      { name: 'Local model · Ollama', branch: 'u/lee/task-142' }
    ],
    statuses: { working: 'working', awaiting: 'awaiting approval', done: 'done' },
    approval: { title: 'Risky step: merge into main', command: 'git merge --no-ff u/anna/task-142', reject: 'Reject', approve: 'Approve' },
    footer: 'cost per task · audit log · worktree per agent'
  },
  flow: {
    title: 'How a task goes through the control room',
    steps: [
      { title: 'Task', text: 'A Markdown task in your repository with acceptance criteria.' },
      { title: 'Agents in parallel', text: 'Several agents take it, each in its own worktree and branch.' },
      { title: 'Human approval', text: 'Risky steps wait for a decision from the desktop, a phone or Telegram.' },
      { title: 'Checks', text: 'Acceptance criteria are verified by the system on the branch.' },
      { title: 'Merge', text: 'The accepted result is merged; cost and audit stay with the task.' }
    ]
  },
  stats: {
    title: 'Built with its own method',
    lead: 'ProjectHub was built by AI agents working under ProjectHub: tasks, approvals, checks.',
    items: [
      { value: '7', label: 'weeks from the first commit' },
      { value: '~123K', label: 'lines of TypeScript' },
      { value: '168', label: 'tasks closed' },
      { value: '76', label: 'architecture decisions' },
      { value: '213', label: 'test files' }
    ],
    note: 'Figures from the October 2026 pitch; the codebase has grown since.'
  },
  scenarios: {
    title: 'Three ways to run it',
    lead: 'The same control room, from one laptop to a company perimeter.',
    personal: {
      title: 'Personal',
      subtitle: 'One person and their agents',
      nodes: { you: 'You', desktop: 'ProjectHub desktop', phone: 'Phone · Telegram', repo: 'Your repository', agents: ['Claude Code', 'Codex', 'Local model'], worktree: 'worktree per agent', approvals: 'approvals', audit: 'audit · cost' },
      caption: 'Agents work in parallel in your repository; risky steps wait for your approval from the desktop or a phone. Everything stays on your machine.'
    },
    team: {
      title: 'Team',
      subtitle: 'A shared host, one set of rules',
      nodes: { host: 'Shared host · ph-agent', members: ['Anna · owner', 'Max · member', 'Lee · member'], worktrees: 'a worktree per person', queue: 'Merge queue', checks: 'checks · review by another person', budgets: 'Budgets · SSO · audit per person', main: 'main' },
      caption: 'Each member works in their own branch with their own agents; finished work goes through a merge queue with checks and review. Budgets, SSO and the audit log cover the whole team.'
    },
    enterprise: {
      title: 'Enterprise',
      subtitle: 'Inside the company perimeter',
      nodes: { perimeter: 'Company perimeter · air-gapped', hosts: ['Team host A', 'Team host B'], relay: 'Own relay · push gateway', models: 'Internal models only', siem: 'SIEM · audit export', policy: 'Rules as code', sandbox: 'Sandboxes for untrusted members' },
      caption: 'Team hosts run inside the perimeter with internal models, an own relay and push gateway; audit goes to SIEM, rules are versioned code. Planned: work starts after the first paid pilots.'
    }
  },
  support: {
    title: 'Donate to ProjectHub',
    description: 'ProjectHub Personal is free under MIT. Donate to support its development.',
    heading: 'Donate to ProjectHub',
    lead: 'The Personal edition is free, open source and will stay that way. If ProjectHub saves you hours, you can support its development.',
    donate: 'Donate',
    donateSoon: 'The donation link is being set up and will appear here.',
    waysTitle: 'Other ways to help',
    ways: [
      'Pilot the Team edition with your team: pilots shape what gets built next.',
      'Tell a colleague who runs AI coding agents.',
      'Report what does not work: every report becomes a task.'
    ],
    whereTitle: 'What the money goes to',
    where: 'Signed builds for macOS and Windows, installers through winget and Homebrew, app store publication of the mobile client, and the documentation.',
    downloadAsk: 'ProjectHub is free. If it saves you time, consider a donation.',
    downloadCta: 'Donate ♥'
  },
  home: {
    title: 'ProjectHub — a control room for AI coding agents',
    description: 'An Agentic Development Environment: agents work on tasks in parallel, risky steps wait for a human, acceptance is checked by the system, and everything stays inside your perimeter.',
    kicker: 'Agentic Development Environment',
    heading: 'A control room for AI coding agents',
    lead: 'Not an editor with a chat panel on the side. ProjectHub is a desktop environment where AI agents work as full members of the team: they take tasks, work in parallel, ask a human before risky steps, and prove the work is done.',
    ctaDownload: 'Get ProjectHub',
    ctaDocs: 'Read the docs',
    pointsTitle: 'What makes it different',
    points: [
      { title: 'The unit of work is a task, not a file', text: 'Tasks live in your repository as Markdown. Agents pick them up and the board updates in real time.' },
      { title: 'Many agents, in parallel', text: 'Every agent gets its own Git worktree, branch and terminal. No conflicts in a shared working directory.' },
      { title: 'A human stays in the loop', text: 'Risky agent steps wait for approval from the desktop, a phone or Telegram. Cancelling the session means deny.' },
      { title: '"Done" is checked by the system', text: 'Acceptance criteria are verified by checks on the branch, not by the agent that wrote the code.' },
      { title: 'Any agent, any model', text: 'Claude Code, Codex, Antigravity, API models and local models through Ollama or any OpenAI-compatible endpoint. No vendor is mandatory.' },
      { title: 'Inside your perimeter', text: 'Local-first. Cost is tracked per task, every action is in the audit log, and nothing is sent anywhere: no telemetry.' }
    ],
    demoTitle: 'Two-minute demo',
    demoPlaceholder: 'The demo video (task → parallel agents → approval from a phone → "done" check → merge) is being recorded. It will appear here.',
    installTitle: 'Install',
    installLead: 'Installers for Windows, macOS and Linux are published on the releases page of the public repository. Builds are not signed yet, so macOS and Windows show a warning on first launch. One-command installs (winget, Homebrew) come later.',
    installNote: 'See the Download page for the status of builds.',
    editionsTitle: 'Editions',
    editionsLead: 'Everything one person needs is free. Paid editions start where several people, company money or compliance requirements appear.',
    editionsMore: 'Compare editions and prices',
    statusTitle: 'Honest status',
    statusText: 'ProjectHub is at version {version}, pre-release. The Personal edition is nearly complete, the Team edition is in pilots, Enterprise has not started. Builds are not signed yet.'
  },
  download: {
    title: 'Download ProjectHub',
    description: 'Builds of the open edition of ProjectHub for Windows, macOS, Linux and Android.',
    heading: 'Download',
    lead: 'The open (Personal) edition is free under the MIT license. Installers are published on the releases page of the public repository.',
    noBuilds: 'Builds of the open edition are published on the releases page of the public repository: Windows installer and portable, macOS dmg, Linux AppImage. The list on this page appears with the update channel.',
    plannedTitle: 'Planned formats',
    planned: [
      'Windows: portable and NSIS installer',
      'macOS: dmg (unsigned until a certificate is obtained)',
      'Linux: AppImage',
      'Mobile client: Android APK, then app stores'
    ],
    buildsTitle: 'Builds',
    columns: { platform: 'Platform', format: 'Format', file: 'File', size: 'Size', checksum: 'SHA-256' },
    sizeUnit: 'MB',
    published: 'Published',
    fromSource: 'Build from source',
    allReleases: 'All releases on GitHub',
    updates: 'The desktop app checks for updates on demand and at startup; nothing is sent besides the update request itself.'
  },
  pricing: {
    title: 'Pricing — Personal, Team, Enterprise',
    description: 'Personal is free under MIT. Team is priced per seat and is in pilots. Enterprise is an annual license with support.',
    heading: 'Editions and prices',
    lead: 'Three editions are three situations, not three checkbox sets. Everything one person needs is free. Paid editions start where several people, company money or compliance requirements appear.',
    perSeatMonth: 'per seat per month',
    free: 'Free',
    mit: 'MIT license',
    contract: 'Annual license and support, by agreement',
    personal: {
      name: 'Personal',
      audience: 'One person and their agents: a developer, a freelancer, a founder.',
      status: 'Nearly everything is ready',
      includes: [
        'Task board, a Git worktree per task, parallel agents, Swarm Arena with an automatic judge, the "until done" loop, subtask planner, Agents Studio',
        'Any agents and models: Claude Code, Codex, Antigravity, any OpenAI-compatible API, local models via Ollama; model tiers and fallback models',
        'Approvals of your own agents from the desktop, a phone and Telegram; audit log; your own cost tracking; dependency and secret checks',
        'Documentation search, architecture decisions, project memory, MCP server, skills, voice',
        'Mobile client and federation of your own machines'
      ],
      neverPaidTitle: 'Never becomes paid',
      neverPaid: [
        'Security: approval of risky actions, policies for your agents, the audit log',
        'Local models and independence from any vendor',
        'The number of agents and projects'
      ]
    },
    team: {
      name: 'Team',
      audience: 'A team of 2–20 people in one project on a shared host, with one budget, one set of rules and one audit log.',
      status: 'In pilots: the price is a hypothesis validated with the first 5–10 teams',
      includes: [
        'Shared host: members and roles (owner / maintainer / member / viewer), invitation by code, a worktree per person',
        'Merge queue: a temporary branch "main + task", checks and acceptance criteria on it, review by someone other than the author',
        'Sessions and agents per person: approvals go to the author, commits are signed by the member, cost is counted per person',
        'ph-agent: a federation host on a server or in a VM, running as a service',
        'SSO and shared rules for roles, audit per person with export',
        'Budgets and limits per person, project, agent and task; stop on overrun; a report for finance',
        'Value reports: cost per task, cycle time, share of accepted agent results, model comparison',
        'Integrations: Jira, Linear, ClickUp; team chats; PRs and CI'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      audience: 'A company where security, compliance and procurement decide: regulated industries and large product companies.',
      status: 'Not started: begins after the first paid pilots',
      includes: [
        'Deployment inside your perimeter, including air-gapped; your own relay and push gateway; local and internal models only',
        'Audit storage and export, SIEM integration, rules as versioned code',
        'SOC 2',
        'Isolation of untrusted members: separate OS users or containers',
        'Support: SLA, onboarding help, team training'
      ]
    },
    note: 'Prices are a hypothesis until the first pilots. Source: the editions document in the product context exported from the ProjectHub repository.'
  },
  compare: {
    title: 'Compare — ProjectHub, Orca, Conductor, Vibe Kanban',
    description: 'A fact-only comparison of ProjectHub with Orca, Conductor and Vibe Kanban.',
    heading: 'Compare',
    lead: 'Facts only: what each tool has according to our sources. No ratings. A dash means our sources say nothing about it.',
    columns: { feature: 'Capability', projecthub: 'ProjectHub', orca: 'Orca', conductor: 'Conductor', vibeKanban: 'Vibe Kanban' },
    values: { yes: 'Yes', no: 'No', pilots: 'In pilots', planned: 'Planned', notListed: 'Not listed', none: '—' },
    rows: [
      { feature: 'Free for a single developer', projecthub: 'yes', orca: 'yes', conductor: 'yes', vibeKanban: 'yes' },
      { feature: 'Open source client', projecthub: 'yes', orca: 'yes', conductor: 'none', vibeKanban: 'none' },
      { feature: 'Human approval of risky agent steps from the desktop, a phone or Telegram', projecthub: 'yes', orca: 'no', conductor: 'none', vibeKanban: 'none' },
      { feature: 'Audit log of agent actions', projecthub: 'yes', orca: 'no', conductor: 'none', vibeKanban: 'none' },
      { feature: 'Acceptance criteria checked by the system, not by the agent', projecthub: 'yes', orca: 'no', conductor: 'none', vibeKanban: 'none' },
      { feature: 'Cost tracked per task', projecthub: 'yes', orca: 'none', conductor: 'none', vibeKanban: 'none' },
      { feature: 'Any agent and model, including local models', projecthub: 'yes', orca: 'none', conductor: 'none', vibeKanban: 'none' },
      { feature: 'Team layer: roles, budgets, merge queue, SSO', projecthub: 'pilots', orca: 'notListed', conductor: 'none', vibeKanban: 'none' },
      { feature: 'Self-hosted server inside the company network', projecthub: 'planned', orca: 'yes', conductor: 'none', vibeKanban: 'none' },
      { feature: 'Published prices', projecthub: 'yes', orca: 'no', conductor: 'none', vibeKanban: 'none' }
    ],
    notes: [
      'Orca: free open-source client (MIT, about 92.7k GitHub stars). Its Enterprise page offers an Orca server inside the company network and help with standardising agents; no prices; SSO, RBAC, policies and budgets are not mentioned.',
      'Conductor and Vibe Kanban: free for a single developer. Our sources say nothing else about them, hence the dashes.',
      'ProjectHub: Personal is free (MIT); the Team layer is in pilots; a server inside the company perimeter is an Enterprise item that has not started.'
    ],
    reviewed: 'Sources reviewed on 2026-10-16. If something here is out of date, it is corrected with the next review.'
  },
  docs: {
    title: 'Documentation',
    comingSoon: 'This section is being written. The outline is final; the content arrives with the documentation task.'
  }
} as const;

export type Dictionary = typeof en;
