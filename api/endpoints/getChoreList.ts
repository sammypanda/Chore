import type { Context } from "@oak/oak";

export function getChoreList(context: Context) {
    // TODO: grab this data from persistent storage, like a database
    const chores = [{
        "id": 0,
        "label": "Water the plants",
        "dayToReset": 1733407200,
        "daysToKeep": 3,
        "done": true
    },
    {
        "id": 1,
        "label": "Feed the cat",
        "dayToReset": 1733234400,
        "daysToKeep": 1,
        "done": false
    }];

    context.response.body = { 
        message: "The following are the chores, their id (integer), their label (string), the day to reset the state (unix timestamp), the amount of days to keep (integer) and their current state (boolean)", 
        chores 
    };
};