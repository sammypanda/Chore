import type { Context } from "@oak/oak";
import { getDatabase } from "../main.ts";

export async function getChoreList(context: Context) {
    const db = getDatabase();

    // get all the chores
    const chores = await db.prepare("SELECT * FROM chores").all();

    // send response
    context.response.body = {   
        message: "The following are the chores, their id (integer), their label (string), the day to reset the state (unix timestamp), the amount of days to keep (integer) and their current state (boolean)", 
        chores
    };
};