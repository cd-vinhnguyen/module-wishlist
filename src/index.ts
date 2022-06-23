import { HeronJS } from "@heronjs/core";
import { AppModule } from "./app.module";

const main = async () => {
    const app = await HeronJS.create({ module: AppModule });
    app.listen({
        port: 3000
    });
    return app;
};

(async () => main())();