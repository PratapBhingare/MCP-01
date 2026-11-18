import { MCPAdapter } from "@langchain/mcp-adapters";

const adapter = new MCPAdapter({
  servers: {
    calendar: {
      command: "node",
      args: ["../mcp-server/server.js"],
    },
  },
});
