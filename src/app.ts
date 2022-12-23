import fastify from "fastify";
import db from "./plugins/db";
import healthCheckHandler from "./services/healthcheck/routes";
import productsHandler from "./services/products/routes";
import usersHandler from "./services/users/routes";

function app() {
    const server = fastify({ logger: true })

    server.register(db);

    server.register(healthCheckHandler);

    server.register(usersHandler);
    server.register(productsHandler);

    return server;
}

export default app;