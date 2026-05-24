# Skills

Agents need instructions to follow. The better the instructions, the more likely the agent will be able to do something useful for/with their user.

This folder is a collection of [agent skills](https://agentskills.io) to steer your agents to build optimal ServiceNow Fluent integrations. Skills in this directory are the canonical source — provider-specific copies live under `providers/*/plugin/skills/`.

## Available local skills

- `now-sdk-explain`: ServiceNow Fluent / Now SDK documentation lookup through `npx @servicenow/sdk explain`.
- `now-sdk-setup`: Environment checks for using the Now SDK explain command.
- `servicenow-workflow-mockup-agent`: Designs ServiceNow workflow mockups and chooses between pure RITM catalog items, record producers, and deliberation/update workflows.
