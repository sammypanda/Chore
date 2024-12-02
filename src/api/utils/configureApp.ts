import type { Application, Router } from "@oak/oak";

export function configureApp(app: Application, router: Router): Application {
    app.use(router.routes());
    app.use(router.allowedMethods());

    return app;
}