import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { Context } from "./lib/types/context";
import auth from "./plugins/auth";
import custom from "./plugins/custom";
import db from "./plugins/db";
import swagger from "./plugins/swagger";
import swaggerUi from "./plugins/swagger-ui";
import healthCheckHandler from "./services/healthcheck/routes";
import productsHandler from "./services/products/routes";

declare module "fastify" {
    interface FastifyInstance {
        customDecorator: (req: any, res: any) => void;
        db: Context;
        authenticate: (request: FastifyRequest, reply: FastifyReply, done: (err?: Error) => void) => void,
    }
}

function app() {
    const server = fastify({ logger: true })

    server.addHook('preHandler', async (request, reply) => {
        try {
            // some logic
        } catch (err) {
            console.log(err);
        }
    });

    server.register(custom)

    server.route({
        method: "GET",
        url: "/",
        preHandler: async (request, reply) => {
            console.log('preHandler');
            server.customDecorator(request, reply);
        },
        handler: async (request, reply) => {
            return { hello: "world" }
        }
    })

    server.register(db);
    server.register(auth);
    server.register(swagger);
    server.register(swaggerUi);

    server.register(healthCheckHandler);

    server.register(productsHandler);

    return server;
}

export default app;