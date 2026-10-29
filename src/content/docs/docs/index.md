---
title: "Overview"
description: "What ProjectHub is and where to start in the user documentation."
---

ProjectHub is an Agentic Development Environment (ADE): a desktop app where AI coding agents take tasks, work in parallel and ask a human before risky steps.

## How ProjectHub works

- **The unit of work is a task.** Tasks are Markdown files in the project's `backlog/` folder (Backlog.md format). You write a task with acceptance criteria and hand it to an agent.
- **Each agent works in its own Git worktree.** Several agents can work on one repository at once without touching each other's files or your working copy.
- **Risky steps wait for approval.** Commands, file writes and other actions that are not allowed by rules appear as requests. You approve or deny them on the desktop, on a phone or in Telegram.
- **"Done" is checked by ProjectHub, not claimed by the agent.** In the "Until done" loop ProjectHub runs the project checks and verifies every acceptance criterion against the agent's evidence.
- **Any agent or model.** Claude Code, Codex, Antigravity, API providers (Anthropic, OpenRouter, DeepSeek, any OpenAI-compatible endpoint) and local models through Ollama.
- **Local-first.** State lives on your disk. There is no telemetry; logs and crash dumps stay on your machine.

The desktop app runs on Windows, macOS and Linux. A mobile client lets you follow agents and approve their steps from a phone.

## Sections

| Section | What it covers |
|---|---|
| [Install](/docs/install/) | Windows, macOS, Linux builds, updates and the mobile client |
| [Quick start](/docs/quick-start/) | From installation to the first task completed by an agent |
| [Concepts](/docs/concepts/) | Tasks, worktrees, roles, approvals (HITL), Swarm Arena, the "Until done" loop |
| [Remote Control](/docs/remote-control/) | Phone pairing, approvals from a phone, Telegram Mini App, several computers |
| [MCP server](/docs/mcp/) | The built-in MCP server for external agents and its tokens |
| [Editions and licenses](/docs/editions/) | Personal, Team, Enterprise and the licenses of the code |
| [FAQ and troubleshooting](/docs/faq/) | Logs, diagnostics and frequent questions |

ProjectHub is in pre-release. Builds are not signed yet; see [Install](/docs/install/) for what this means on each system.
