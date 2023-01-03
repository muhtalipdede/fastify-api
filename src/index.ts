import app from "./app"

declare module "fastify" {
    interface FastifyInstance {
        swagger: () => void;
    }
}

const fastify = async () => {
    const server = await app();

    server.listen({ port: 3000 }, (err, address) => {
        if (err) {
            server.log.error(err);
            process.exit(1);
        }
        server.log.info(`server listening on ${address}`);
    });

    await server.ready();
    server.swagger();
}

fastify();