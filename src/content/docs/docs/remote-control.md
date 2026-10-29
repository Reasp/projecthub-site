---
title: "Remote Control"
description: "Pair a phone with ProjectHub, approve agent steps away from the desk, use the Telegram Mini App and connect several computers."
---

Remote Control lets you follow and control ProjectHub on your computer from a phone, a browser, Telegram or another computer. Agents, tasks, processes and approvals keep running on the computer; the remote device shows them and sends your decisions back.

## Turn on Remote Control

1. Press **Remote** in the status bar at the bottom of the window. The **Remote Control (Remote & Telegram)** window opens.
2. Press **Start**.
3. The **Connection & QR** tab shows a QR code, the **Addresses in QR** and a link for the browser client.

The window has four tabs: **Connection & QR**, **Telegram Mini App**, **Devices** and **Network Settings**.

## Pair the Android app

1. Make sure the phone and the computer are on the same Wi-Fi network. If Windows asks about the firewall for ProjectHub, allow **private networks**.
2. In the app, tap **Scan QR code**, allow camera access and point the camera at the QR code in the Remote Control window.
3. If **Require host approval on first device connection** is on, approve the phone in the **Devices** tab with **Approve Access**.

After pairing the app connects by itself; you do not need to scan the QR code again after a restart. If ProjectHub on the computer was reinstalled or its key was regenerated, scan the QR code again.

![The phone shows all paired computers and their projects](../../../../content/product/assets/task-180/180-phone-after.png)

## Browser client

The desktop app also serves a web client for phones. It encrypts all traffic in the browser, and browsers allow this only on HTTPS pages, so the browser client does not connect over a plain `http://` address in the local network.

1. In the Remote Control window, press **Start tunnel**. After 5–15 seconds an `https://…trycloudflare.com` address appears and is added to the **Addresses in QR**.
2. Scan the QR code with the phone camera, or use **Copy Link** / **Open in Browser** under **Direct Web Client Link**.
3. Approve the device in the **Devices** tab if approval is required.

## Encryption and device rights

- Traffic between the device and the computer is end-to-end encrypted (AES-256-GCM). A tunnel or a relay in between sees only ciphertext.
- The QR code carries the computer's key. The app checks the computer's signature on every connection. If someone substitutes a different key, the app stops with the message that the computer did not confirm its key and sends nothing.
- Each device gets its own token, which you can revoke in the **Devices** tab with **Revoke Access**.
- Each device has rights: **Read-only**, **HITL only** (decisions only) or **Full access**. With **Read-only mode** the phone cannot stop processes or make commits.
- From a phone you cannot run arbitrary commands: only the Run, Test and Deploy actions of the project (Deploy asks for confirmation), and stopping or restarting processes.

## Approve agent steps from the phone

The **Inbox** screen of the app collects everything that waits for you, from all paired computers:

- **Awaiting decision**: approval requests from agents, with **Approve** and **Reject**.
- **Tasks from agents**: tasks created by agents that you need to confirm.
- **In review**: tasks in Review.
- **Events**: an agent finished or failed, an automation failed, or an agent sent you a message.

![An approval request on the phone, with its risk class](../../../../content/product/assets/task-142-6/08-phone-hitl-1.png)

Every request shows its risk class, decided by the computer:

| Risk | Examples | Approve from the phone |
|---|---|---|
| Low | Reading, `git status`, tests, lint | Yes |
| Medium | Writes in the project, `npm install`, build, commit | Yes, in the app and with the Telegram bot button |
| High | `git push`, deletion, network, secrets, writes outside the project, computer control, an unknown tool | On the computer, or in the Android app with biometric confirmation |

You can always reject a request from the phone. The computer checks the risk class itself and does not trust the phone. The first answer from any device wins.

While a request is waiting or an agent started from the phone is running, the computer does not go to sleep. To turn this off, use **Network Settings → Keep the PC awake while an agent waits for a decision**.

### Review a task from the phone

Tap a task under **In review**. You see the acceptance criteria with the verdict of the Until done loop, the checks with their status, and the output of failed checks.

- **Accept** moves the task to Done.
- **Return** sends it back to work with your comment, which is added to the task notes. **Restart the agent** runs the same role again with your comment in its prompt; this needs full access.

### Agents Studio on the phone

The **Studio** screen shows the same sessions as Agents Studio on the computer. You can continue a session, start a new one with any account configured on that computer, choose the model and mode, and stop an answer. A prompt sent from the phone runs on the computer.

## Away from home

The app stores all addresses of the computer and tries them in order: local network, tunnel, relay. The address that worked last time goes first. When the computer's addresses change, it sends the new ones to the phone on the next connection.

To reach the computer from outside your local network:

- **Quick tunnel.** **Start tunnel** in the Remote Control window. No setup is needed, but the address changes every time the tunnel or ProjectHub restarts. Keep the tunnel on only while you need it.
- **Named Cloudflare tunnel.** A permanent address on your own domain connected to Cloudflare. Point the tunnel to `localhost:42050` and enter its `https://` address in the **Public WebApp URL** field on the **Telegram Mini App** tab.
- **Your own relay.** A server with a domain and TLS. Enter its `wss://` address in **Network Settings**. The computer connects to the relay itself; no incoming ports are needed. Only ciphertext passes through the relay.

After you set up a new path, scan the QR code once more, or connect once at home so that the phone receives the new address.

## Telegram Mini App and bot

The Mini App is the same client inside Telegram. The bot sends notifications, for example about crashed processes and approval requests, and has buttons to approve medium-risk requests.

1. In Telegram, create a bot with **@BotFather** using the `/newbot` command.
2. On the **Telegram Mini App** tab, enter the **Telegram Bot Token (from @BotFather)**, the **Bot Username (without @)** and **Your Telegram Chat ID**.
3. Start the tunnel: Telegram requires an HTTPS address.
4. In @BotFather, send `/newapp`, pick your bot and specify the Mini App URL.
5. Press **Save Telegram Settings** and send a test message.

## Several computers

### One phone, several computers

- To add a computer, open **Computers → Add computer** in the app and scan the QR code of that computer. The first one stays in the list.
- Pairings are independent: each computer has its own device ID, key and token, and computers do not learn that the phone is the same.
- The **Computers** switcher shows the status, the connection path and the number of waiting requests for each computer.
- **Forget this computer** removes the key and token of that computer only.

### Computers that see each other

Several computers with ProjectHub can be connected into one federation. A connected computer appears in **Remote hosts**: its projects, tasks, processes, agents and approval queue are shown in the same window.

![Remote hosts: another computer's projects, tasks, processes, agents and HITL queue](../../../../content/product/assets/task-142-6/13-b-hitl-queue-empty.png)

There are three ways to connect two computers:

- **Link for another PC.** Copy it in the Remote Control window of one computer and open it on the other one; ProjectHub offers to add the first computer.
- **From the phone.** When at least two computers with full access are paired, **Computers → Introduce computers** connects them in both directions.
- **Manually.** **Remote hosts → Add host**, with the host ID, key and pairing PIN from the Remote Control window of the other computer.

A task can be sent to an agent on a specific computer: set **Assignee** to `agent:<role>@<host>`. Automatic start of assigned tasks is off by default.

On macOS, allow ProjectHub **Local Network** access, otherwise it cannot reach other computers in your local network.
