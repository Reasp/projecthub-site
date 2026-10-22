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
    switchLanguage: 'Русский',
    switchLanguageTitle: 'Switch to Russian',
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
    source: 'Source code'
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
    installLead: 'Installers for Windows, macOS and Linux and one-command installs (winget, Homebrew) are planned for the first public release. Today ProjectHub is built from source:',
    installNote: 'Requirements: Node.js 22 and Git. See the Download page for the status of builds.',
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
    lead: 'The open (Personal) edition is free under the MIT license. Builds are published here and in the public repository.',
    noBuilds: 'There are no published builds yet. They will appear here with the first public release of version {version}. Until then, build ProjectHub from source:',
    plannedTitle: 'Planned formats',
    planned: [
      'Windows: portable and NSIS installer',
      'macOS: dmg (unsigned until a certificate is obtained)',
      'Linux: AppImage',
      'Mobile client: Android APK, then app stores'
    ],
    buildsTitle: 'Builds',
    columns: { platform: 'Platform', format: 'Format', file: 'File', checksum: 'SHA-256' },
    published: 'Published',
    fromSource: 'Build from source',
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
    reviewed: 'Sources reviewed on 2026-10-16. If something here is out of date, open an issue in the repository.'
  },
  docs: {
    title: 'Documentation',
    comingSoon: 'This section is being written. The outline is final; the content arrives with the documentation task.'
  }
} as const;

export type Dictionary = typeof en;
