import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import * as z from "zod";

const EVENTS = [];

//mcp server
const server = new McpServer({ name: "calendar-server", version: "1.0.0" });
