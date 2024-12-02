import { Application, Router } from "@oak/oak";
import { loadEndpoints } from "./loadEndpoints.ts";
import { configureApp } from "./configureApp.ts";

// Load the endpoints and add routes
const router = await loadEndpoints(new Router());

// Add the router to the apps
const app = await configureApp(new Application(), router);

// Superoak Deno V2 workaround
// deno-lint-ignore no-explicit-any
(globalThis as any).window = globalThis;

// Export the app
export { app };