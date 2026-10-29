---
title: "MCP server"
description: "The built-in MCP server of ProjectHub: what external agents can do through it, its endpoints and its two kinds of tokens."
---

ProjectHub runs its own MCP (Model Context Protocol) server. Agents that support MCP, such as Claude Code, Cursor, Windsurf and Antigravity, use it to read and update tasks, documents and project memory, and, with the main token, to control ProjectHub itself.

## Endpoints

The server listens only on `127.0.0.1`, port `42042`. Other machines cannot reach it; remote access goes through [Remote Control](/docs/remote-control/) instead.

| Transport | Address |
|---|---|
| SSE | `http://127.0.0.1:42042/sse` |
| Streamable HTTP | `http://127.0.0.1:42042/mcp` |

Every request needs an `Authorization: Bearer <token>` header. Requests from web pages (with an `Origin` header) are rejected.

The **MCP** item in the status bar opens the **Built-in MCP HTTP/SSE Server** window. It shows the endpoint, the token and ready-to-copy configuration (**Copy JSON**, **Copy cURL**), and lets you start and stop the server.

## Two kinds of tokens

### Project agent token

This is the token for agents that work on a project.

- The terminal of a registered project gets two environment variables automatically: `PROJECTHUB_MCP_URL` and `PROJECTHUB_AGENT_TOKEN`. Agents started in that terminal use them.
- The token is bound to one project. With it, the server offers only the tools for tasks, documents, search and memory of that project, and writes only into its `backlog/` folder. Every change is recorded in the audit log.
- Approvals, processes and window control are closed for this token.

| Tools | What they do |
|---|---|
| `task_list`, `task_view`, `task_create`, `task_update` | Read, create and update tasks |
| `doc_list`, `doc_view`, `doc_create`, `doc_update` | Read, create and update documents |
| `docs_search` | Search the project documentation |
| `memory_write`, `memory_search`, `memory_delete` | Write, search and delete facts of the project memory |

The table lists the main tools; it is not complete. For example, there are also `doc_branch_*` tools for documentation branches. Your MCP client shows the full list when it connects.

Tasks that an agent creates are marked as created by an agent. They are not started automatically until you approve them.

### Main token

The token in the MCP window (**Session Access Token**) gives full control: switching projects and tabs, sending prompts to Agents Studio, managing processes, reading the backlog and deciding on approval requests.

- It is created once and kept until you regenerate it with **Refresh**, so external configurations do not break on restart.
- Do not put it into an agent's environment or into project files: it can approve requests that are meant for you.

## Configuration in a project

Initializing a project (see [Quick start](/docs/quick-start/#2-initialize-the-project)) adds this entry to `.mcp.json`:

```json
{
  "mcpServers": {
    "projecthub": {
      "type": "sse",
      "url": "${PROJECTHUB_MCP_URL:-http://127.0.0.1:42042/sse}",
      "headers": { "Authorization": "Bearer ${PROJECTHUB_AGENT_TOKEN:-}" }
    }
  }
}
```

The token itself is never written to project files; it comes from the environment of the ProjectHub terminal. The empty defaults let Claude Code start in that project even outside ProjectHub.

For Antigravity, the entry goes into `.agents/mcp_config.json` and uses the Streamable HTTP endpoint:

```json
{
  "mcpServers": {
    "projecthub": {
      "serverUrl": "http://127.0.0.1:42042/mcp",
      "headers": { "Authorization": "Bearer ${env:PROJECTHUB_AGENT_TOKEN}" }
    }
  }
}
```

## Limits

- The tools are available only while ProjectHub is running. Without it, agents still have the project rules and the files in `backlog/`, but not the MCP tools.
- The server is local. Team members on other machines do not connect to it.
