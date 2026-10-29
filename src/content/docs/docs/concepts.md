---
title: "Concepts"
description: "Tasks, worktrees, roles, human-in-the-loop approvals, Swarm Arena and the Until done loop."
---

## Task: the unit of work

In ProjectHub you give agents tasks, not files. Tasks use the Backlog.md format: one Markdown file per task in `backlog/tasks/` with a title, description, status, labels, assignee and **Acceptance Criteria**. Documents and architecture decisions live next to them in `backlog/docs/` and `backlog/decisions/`.

Because tasks are plain files in the repository, they travel with Git, and agents can read and update them through the [MCP server](/docs/mcp/).

The **Tasks & Backlog** tab shows them as a Kanban board or a list. The default statuses are:

| Status | Meaning |
|---|---|
| To Do | Not started |
| In Progress | Someone (a person or an agent) is working on it |
| Review | Work is finished and waits for a check |
| Done | Accepted |

Two more statuses hand a task to a person: **Waiting for a human** (InProgress(Human)) when only a person can unblock the work, and **Human review** (Review(Human)) when the result cannot be checked automatically. The set of statuses is defined by `backlog/config.yml` of the project.

Tasks created by an agent get a note on the card. Until you approve them, they are not started automatically.

## Worktree per agent

Each agent works in its own Git worktree: a separate working folder of the same repository with its own branch.

- Worktrees live in `.worktrees/`, and the folder name comes from the branch name. A worktree created from a task card gets the branch `task/<id>` and the folder `.worktrees/task-<id>`. The Until done loop and Swarm Arena create their own branches `swarm/<session>/…`. ProjectHub adds `.worktrees/` to `.gitignore`.
- Terminals, processes and the agent of a worktree run in that folder.
- When an agent finishes, ProjectHub commits its changes in the worktree, so the result is never lost.
- Merging is safe: ProjectHub checks that your main working copy is clean, and on a conflict aborts the merge and restores your branch. You can also accept separate files instead of the whole branch, or open a pull request.

Several agents can therefore work on one repository at the same time, and your own working copy stays untouched until you merge. Worktrees are managed in **Git Repository → Git Worktrees**.

## Roles

A role describes how an agent works: engine, model, allowed tools, approval rules, budget and a system prompt. Roles are Markdown files with frontmatter. Global roles belong to your machine; project roles live in `.projecthub/roles/` and override global roles with the same name.

ProjectHub comes with six roles that you can edit or copy:

| Role | Purpose |
|---|---|
| `architect` | Specification and plan, read-only |
| `implementer` | Writes code in the worktree, runs commands |
| `reviewer` | Reads and comments, no writes |
| `tester` | Runs tests; writes only test files: `tests/**`, `**/*.test.*`, `**/*.spec.*` |
| `manager` | Creates tasks as proposals for you to confirm; does not write code or run commands |
| `doc-writer` | Writes only documentation: `backlog/docs/**` and `backlog/decisions/**` |

Roles are edited in **Agents Studio → Agent Roles**. To give a task to a role, set the task's **Assignee** to `agent:<role>`, for example `agent:implementer`. On a federation of several computers, `agent:<role>@<host>` sends the task to a specific computer (see [Remote Control](/docs/remote-control/#several-computers)).

## Human-in-the-loop (HITL)

Every agent that ProjectHub starts goes through one approval queue: Agents Studio, Swarm Arena, the Until done loop, assigned tasks, and agents in the built-in terminal.

- Steps allowed by the role's rules run without a question, for example reading files or running tests.
- Other steps become requests: a command, a file change, a question to you. The agent waits for the answer.
- You answer on the desktop (a card in Agents Studio or the **Decision Center**), on a paired phone or in Telegram. Each request has its own ID; the first answer wins and other devices see "already decided".
- A request that nobody answers is denied after the timeout: 24 hours by default, configurable.
- Requests have a risk class: low (reading, tests), medium (writes in the project, installs, builds, commits) and high (push, deletion, network, secrets, writes outside the project). High-risk requests are approved on the computer or in the Android app with biometric confirmation.
- Agents cannot write outside the project folder, even with automatic approval.

Every decision is written to an audit log: who decided (you in the window, a remote device, an automatic rule, a timeout), what was approved and the outcome. Secrets and file contents are not stored, only paths and hashes. The log is in **Decision Center → Decision history**, with filters and export to CSV, JSONL or JSON.

## Swarm Arena

Swarm Arena sends one task to several agents at once, for example Claude Code, Codex and an API model. Each agent works in its own worktree.

- The side-by-side view shows logs, metrics, cost and the diff of every agent.
- After the agents finish, ProjectHub runs the project checks (lint, test, build and typecheck when present) in every worktree and ranks the results. Passing checks is required; other factors are acceptance criteria, diff size, cost and time. The weights are shown next to the score.
- A `reviewer` role can review every diff and add its comments as another column.
- You make the final decision. **Pick Winner** merges the chosen branch and cleans up the others.

Start the arena from a task card or from Agents Studio.

## The Until done loop

The **Until done** loop runs one agent until the task is really done, or until a limit is reached. Each iteration is:

1. The agent takes a turn in its worktree.
2. ProjectHub commits the changes.
3. ProjectHub runs the checks from `.projecthub.json` or `package.json`.
4. ProjectHub reads the agent's report and verifies each acceptance criterion.
5. If checks fail or criteria are not met, the agent gets the errors and tries again.

Rules of the loop:

- **Only ProjectHub checks acceptance criteria.** A criterion counts only when the agent reports it as done with concrete evidence: a file and line, a test, a command and its output. If the agent changes the checkboxes in the task file itself, ProjectHub reverts the change.
- **Limits.** 5 iterations by default (1–20) and an optional budget.
- **On success** the criteria are checked in the task, a **Final Summary** is written and the task moves to **Review**.
- **On failure** the task is not changed, except for a short note with the outcome and the reason.
- **The loop never sets Done.** Accepting the result is your decision.

Defaults for the loop are set in the `doneLoop` section of `.projecthub.json`; the launch window lets you change them for one run.
