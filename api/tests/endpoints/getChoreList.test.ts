import { superoak } from "https://deno.land/x/superoak@4.8.1/src/superoak.ts";
import { app } from "../../utils/createApp.ts";
import { assertEquals } from "https://deno.land/std@0.213.0/assert/mod.ts";

Deno.test("Chore list population (2 chores)", async () => {
    const request = await superoak(app);
    await request.get("/getChoreList")
        .expect(200)
        .expect((response) => {
            assertEquals(response.body.chores.length, 2)
        });
})