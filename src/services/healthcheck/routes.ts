import { FastifyInstance } from "fastify";

export default function healthCheckHandler(server: FastifyInstance, options: any, done: any) {
    server.get('/healthcheck', async (request, reply) => {
        reply.send({ status: 'ok' });
    });

    done();
}