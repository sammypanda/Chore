import type { Context } from "@oak/oak";

export function home(context: Context) {
    context.response.body = { message: "Hi!" };
};
  