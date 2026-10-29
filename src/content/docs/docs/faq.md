---
title: "FAQ and troubleshooting"
description: "Logs, the Diagnostics window and answers to frequent questions about ProjectHub."
---

## Diagnostics

The **Diagnostics** window opens from its icon in the status bar at the bottom of the window. It shows:

- the app version and build;
- the platform;
- the **Data directory** and the **Logs directory** of ProjectHub on this machine;
- **Check for updates**;
- **Collect log archive**.

## Logs

- The main log is `main.log` in the **Logs directory** (`<userData>/logs/main.log`).
- When the file reaches 5 MB it is rotated; three older files are kept as `main.N.log`.
- The log level is set with the environment variable `PROJECTHUB_LOG_LEVEL`: `debug`, `info`, `warn` or `error`. The installed app uses `info` by default. To get more detail, set `PROJECTHUB_LOG_LEVEL=debug` in the environment and start ProjectHub from it.
- Names of secrets and file contents are not written to the log.

### Collect logs for a bug report

1. Open **Diagnostics**.
2. Press **Collect log archive**.
3. The archive with `main.log`, its older files and local crash dumps is saved on your disk; the window shows the path.
4. Attach the archive to your bug report.

Nothing is sent automatically: crash reports and logs stay on your machine until you send them yourself.

## Frequent questions

### Does ProjectHub collect telemetry?

No. State is stored on your disk, and there is no analytics. ProjectHub contacts only the services you configure (model providers, Telegram, your relay) and the update check.

### Do I need an API key?

No, if you use Claude Code CLI with your account: ProjectHub works on top of it. API keys are needed only for API providers such as Anthropic, OpenRouter or DeepSeek. Local models through Ollama need neither.

### Does ProjectHub commit or push on its own?

- Agent results are committed automatically, but only in the agent's own branch and worktree.
- Merging into your branch happens only when you press **Pick Winner** or **Complete / Merge**.
- Project initialization does not commit; it shows the command for you to run.

### An agent seems stuck

It may be waiting for your decision. Open the **Decision Center** from its badge in the status bar at the bottom of the window: the **Awaiting decision** tab lists all pending requests from all agents. A request that nobody answers is denied after the timeout (24 hours by default).

### Where is the history of approvals?

**Decision Center → Decision history**. It lists every decision, who made it and the outcome, with filters and export to CSV, JSONL or JSON.

### The update does not install on macOS

The macOS build is not signed, so automatic installation is not available. **Diagnostics** shows a link to the release; download the new version and replace the app.

### Windows or macOS warns that the app is from an unknown publisher

The builds are not signed yet. See [Install](/docs/install/) for how to open the app on each system.

### Agents in the terminal do not see the task tools

The MCP tools for tasks and documents work only while ProjectHub is running, and only in the terminal of a project registered in ProjectHub, which receives the project agent token. See [MCP server](/docs/mcp/).

### How do I change the interface language?

ProjectHub starts in the language of your system if it is available, otherwise in English. English and Russian are available; the language switch (EN / RU) changes the interface at once.

## Phone and Remote Control

### "Connection error" right after scanning the QR code

- Check that the phone and the computer are on the same network.
- Check that the firewall allows ProjectHub on private networks.
- Open `http://<IP>:42050/api/status` in the phone's browser, with the IP address from the QR code. If it does not open, the phone cannot reach the computer.

### "The key doesn't match this computer" or "The encryption key is outdated"

The key on the computer was regenerated. Scan the QR code again.

### "The computer didn't verify its key"

The app stopped the connection because the computer could not prove its key: someone in the network or on the relay may have substituted it. Check the network. If you reinstalled ProjectHub on the computer, scan the QR code again.

### "Invalid pairing PIN or secret key"

The computer did not accept the pairing PIN or key. Possible causes:

- the QR code or link is old, or the key on the computer was regenerated: open the Remote Control window and scan the current QR code again;
- the desktop app and the mobile app are of different versions: update both.

### The phone works at home but not outside

The QR code contains only local network addresses. Set up a tunnel or a relay (see [Remote Control](/docs/remote-control/#away-from-home)), then scan the QR code again or connect once at home. The app shows which addresses it tried and why each failed:

- the tunnel is unavailable: the tunnel was stopped, or ProjectHub restarted and the tunnel has a new address;
- the computer is not connected to the relay: ProjectHub is not running or cannot reach the relay.

### A Mac cannot connect to another computer in the local network

Allow ProjectHub **Local Network** access in the macOS privacy settings.

## Reporting a problem

Bug reports, ideas and pull requests are welcome in the public repository `projecthub-oss` on GitHub. Attach the log archive from **Diagnostics**.
