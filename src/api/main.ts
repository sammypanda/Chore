import { app, database, router } from "./utils/createApp.ts"; // Create and get the app

// Start the server
console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });

/**
 * Get the current Chore API instance.
 * @returns the application
 */
export function getApp() {
    return app;
}

/**
 * Gets the Chore database.
 * @returns an sqlite database instance
 */
export function getDatabase() {
    return database;
}

/**
 * Gets the application API routes
 * @returns application router configuration
 */
export function getRouter() {
    return router;
}