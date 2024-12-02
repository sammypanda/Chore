import { Router } from "@oak/oak";
import { home } from "../endpoints/home.ts";
import { getChoreList } from "../endpoints/getChoreList.ts";

export function loadEndpoints(router: Router) {
  router.get("/", home);
  router.get("/getChoreList", getChoreList);

  return router;
}
