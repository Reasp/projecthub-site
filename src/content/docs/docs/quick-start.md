---
title: "Quick start"
description: "From installation to the first task completed by an agent, on any Git repository."
---

This guide takes you from a fresh installation to a task that an agent has completed and you have accepted. It works with any Git repository; nothing is added to your build files.

## Before you start

- ProjectHub is installed ([Install](/docs/install/)).
- Git is installed.
- At least one agent is available. The simplest option is Claude Code CLI signed in with your account. Other agents and models are added in the **Connections** window.

## 1. Add the repository

1. In the **Project Catalog** on the left, press **Add Folder**.
2. Choose the folder of your repository.

ProjectHub can also find projects by itself: **Manage Scan Roots** sets parent folders, **Scan** searches them.

## 2. Initialize the project

ProjectHub keeps tasks and documentation in the repository, in the `backlog/` folder. If something is missing, the project shows an **Initialize** button; its tooltip lists what is missing.

1. Press **Initialize**. The **Initialize project** window opens.
2. Under **Foundation**, leave **Git**, **Tasks**, **Docs** and **Agent rules** selected.
3. Under **Template**, choose **No template** (foundation only).
4. Open **Preview**. It shows the action for every file: create, append, merge, replace or skip. Nothing is written until you press **Apply**.
5. Press **Apply**, then **Done**.

The foundation adds:

- `backlog/` with the task statuses To Do → In Progress → Review → Done, plus folders for documents, decisions and project memory;
- a short section of agent rules in `CLAUDE.md`, `AGENTS.md` and `GEMINI.md` (your text in these files stays);
- an entry for the ProjectHub MCP server in `.mcp.json`, so agents can read and update tasks.

Nothing is committed automatically. The window shows a `git add … && git commit` command for the written files; review the changes and commit them yourself.

## 3. Create a task

1. Open the project and go to the **Tasks & Backlog** tab.
2. Press **New Task**.
3. Enter a title and a description. Pick something small for the first run, for example "Add a `--version` flag to the CLI".
4. Under **Acceptance Criteria**, add one or more concrete, checkable criteria, for example "`app --version` prints the version from `package.json`".

The task is saved as a Markdown file in `backlog/tasks/`.

## 4. Hand the task to an agent

Open the task card and press **Until done**. In the window that opens:

1. Under **Executor**, choose the agent and model.
2. Check **Iteration limit** (1–20 agent turns, 5 by default) and **Checks**. Checks come from `.projecthub.json` or from the scripts in `package.json`. If the project has no checks, the loop verifies only the acceptance criteria.
3. Leave **Move to Review on success** on.
4. Press **Start loop**.

The agent works in its own Git worktree, so your working copy is not touched. After every turn ProjectHub commits the agent's changes in that worktree, runs the checks and verifies the acceptance criteria. If something fails, the agent gets the errors and tries again. The **Until-done loop** panel shows the iteration, the phase, and how many checks and criteria passed.

Another way: type a role into the **Assignee** field, for example `agent:implementer`, and press **Run agent**. The agent runs once with that role in the task's worktree, without the loop.

## 5. Approve the agent's steps

When the agent wants to run a command or change a file that its rules do not allow automatically, it stops and asks.

1. The request appears as a card in Agents Studio and in the **Decision Center**. The Decision Center opens from its badge in the status bar at the bottom of the window; the badge shows how many requests are waiting.
2. Read the command or the file path.
3. Press **Approve Once** to allow this one step, or **Deny Action** to refuse it.

The same requests reach a paired phone and Telegram (see [Remote Control](/docs/remote-control/)). The first answer wins. A request that nobody answers is denied after the timeout (24 hours by default).

## 6. Accept the result

When the loop succeeds:

- the acceptance criteria are checked in the task file, each with the agent's evidence;
- a **Final Summary** with checks, cost, iterations, branch and commit is added to the task;
- the task moves to **Review**.

The agent's changes are still in its branch. To accept them:

1. Review the diff of the agent's branch in the loop's session view.
2. Make sure your main working copy has no uncommitted changes: commit or stash them yourself, otherwise ProjectHub refuses to merge.
3. Press **Pick Winner** on the agent card. ProjectHub merges the branch into the main branch. On a conflict the merge is aborted and your branch is left as it was.
4. Move the task to **Done**. The loop never sets **Done** by itself.

For a task run with **Run agent**, open the **Git Repository** tab, find the task's worktree under **Git Worktrees** and press **Complete / Merge**. The **Task Completion & Merge** window shows the diff, merges the branch and can move the task to Review and delete the worktree after the merge.

## What next

- [Concepts](/docs/concepts/) explains roles, approvals, Swarm Arena and the loop in more detail.
- [Remote Control](/docs/remote-control/) shows how to approve steps from a phone.
