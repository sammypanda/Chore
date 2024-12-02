import { app } from "./utils/createApp.ts"; // Create and get the app

// Start the server
console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });