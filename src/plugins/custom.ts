import "reflect-metadata"
import fp from "fastify-plugin"
import { FastifyInstance, FastifyRegisterOptions } from "fastify";

export default fp(async (app: FastifyInstance, opts: FastifyRegisterOptions<any>, done: (err?: Error) => void) => {
    console.log('custom plugin');

    app.decorate("customDecorator", async (req, res) => {
        console.log('customDecorator');
    });

    done()
})