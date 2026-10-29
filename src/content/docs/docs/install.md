---
title: "Install"
description: "Install ProjectHub on Windows, macOS or Linux, keep it updated and set up the mobile client."
---

ProjectHub builds of the open (Personal) edition are listed on the [Download](/download/) page with file sizes and SHA-256 checksums. All releases are also on the releases page of the public repository `projecthub-oss` on GitHub.

## What you need besides ProjectHub

- **Git.** ProjectHub works with Git repositories and creates a Git worktree for each agent.
- **At least one agent or model**, for example:
  - Claude Code CLI (`claude`), signed in with your account. No API key is needed in this case.
  - Codex CLI (`codex`).
  - An API key of a provider: Anthropic, OpenRouter, DeepSeek or any OpenAI-compatible endpoint.
  - Local models through Ollama.

Accounts, keys and model servers are added in the **Connections** window of ProjectHub.

## Windows

Two files are published for Windows x64:

| File | What it is | Updates |
|---|---|---|
| `ProjectHub-Setup-<version>.exe` | Installer (NSIS) | Automatic |
| `ProjectHub-<version>.exe` | Portable build, runs without installation | Manual: download the new file |

To install:

1. Download the installer or the portable file from the [Download](/download/) page.
2. Run the file.
3. The builds are not signed yet, so Windows SmartScreen may show a warning about an unknown publisher. To continue, choose **More info**, then **Run anyway**.

When you turn on Remote Control for the first time, Windows may ask whether ProjectHub may use the network. Allow access for **private networks**.

## macOS

Builds for Apple silicon (arm64) and Intel (x64) are published as `.dmg` and `.zip`.

1. Download the file for your Mac from the [Download](/download/) page.
2. Open the `.dmg` and drag ProjectHub to **Applications**, or unpack the `.zip`.
3. Start ProjectHub.

The macOS build is not signed with an Apple Developer ID and not notarized, so macOS blocks the first launch. To open it:

1. Try to open ProjectHub once and close the warning.
2. Open **System Settings → Privacy & Security**.
3. Next to the message about ProjectHub, choose **Open Anyway** and confirm.

On older macOS versions you can also Control-click ProjectHub in **Applications**, choose **Open** and confirm.

Other notes for macOS:

- Updates are not installed automatically. When a new version is out, ProjectHub shows a link to the release; download and replace the app yourself.
- macOS may ask for **Local Network** access. Allow it if you use Remote Control or connect several computers on your local network.

## Linux

Linux builds are published as an AppImage for x64.

1. Download `ProjectHub-<version>.AppImage` from the [Download](/download/) page.
2. Make it executable: `chmod +x ProjectHub-<version>.AppImage`.
3. Run the file.

The AppImage updates automatically.

## Updates

ProjectHub checks for updates at startup and on demand: open **Diagnostics** and press **Check for updates**. Nothing is sent besides the update request itself.

| Build | How it updates |
|---|---|
| Windows installer | Downloads the update; **Restart and install** applies it |
| Windows portable | Download the new file manually |
| macOS | Link to the release; replace the app manually |
| Linux AppImage | Automatic |

## Mobile client

The mobile client is a remote control for ProjectHub on your computer: agents, tasks, processes and approvals run on the computer, the phone shows and controls them. Pairing is described in [Remote Control](/docs/remote-control/).

There are two ways to use it:

- **Browser client.** The desktop app serves it itself. Open the pairing link or scan the QR code from the Remote Control window. The browser client encrypts traffic and works only over HTTPS, so start the built-in tunnel first (see [Remote Control](/docs/remote-control/#browser-client)).
- **Android app.** The APK is not published on the Download page yet: it is signed with a debug key only. App stores are planned.

If you received the Android APK:

1. Open the APK file on the phone. Android asks to allow installation from this source; allow it for the app you open the file with.
2. Google Play Protect may warn about an unknown developer because of the debug signature. Choose to install anyway.

## Build from source

The open edition can be built from the public repository `projecthub-oss` (Node.js 22 and Git required):

```bash
git clone https://github.com/Reasp/projecthub-oss.git
cd projecthub-oss
npm install
node scripts/build-info.mjs
npm run build:open                     # desktop app without paid modules
npm run build:mobile                   # optional: web client for phones, served by the desktop app
npx electron-builder --win portable    # Windows: release/*.exe
npx electron-builder --mac dmg         # macOS (unsigned)
npx electron-builder --linux AppImage  # Linux
```
