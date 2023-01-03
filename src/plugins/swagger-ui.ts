import "reflect-metadata"
import fp from "fastify-plugin"
import { FastifyInstance, FastifyRegisterOptions } from "fastify";

export default fp(async (app: FastifyInstance, opts: FastifyRegisterOptions<any>, done: (err?: Error) => void) => {
    try {
        app.register(require("@fastify/swagger-ui"), {
            routePrefix: "/documentation",
        });
        done();
    } catch (error) {
        console.log(error);
    }
})