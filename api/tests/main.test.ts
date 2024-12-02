import { superoak } from "https://deno.land/x/superoak@4.8.1/mod.ts";   
import { app } from "../utils/createApp.ts";

Deno.test("Simple API GET requests", async () => {
    const request = await superoak(app);
    await request.get("/").expect(200);
}); 