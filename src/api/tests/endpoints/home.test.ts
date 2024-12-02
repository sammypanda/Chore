import { superoak } from "https://deno.land/x/superoak@4.8.1/src/superoak.ts";
import { app } from "../../utils/createApp.ts";
import { assertEquals, assertExists } from "https://deno.land/std@0.213.0/assert/mod.ts";

Deno.test("Base path message", async () => {
    const request = await superoak(app);
    await request.get("/")
        .expect(200)
        .expect((response) => {
            assertExists(response.body.message)
        });
})

Deno.test("Base path 'Hi' greeting", async () => {
    const request = await superoak(app);
    await request.get("/")
        .expect(200)
        .expect((response) => {
            assertEquals(response.body.message.includes("Hi"), true);
        })
})  