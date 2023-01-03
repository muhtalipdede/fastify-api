import "reflect-metadata"
import fp from "fastify-plugin"
import { FastifyInstance, FastifyRegisterOptions } from "fastify";

export default fp(async (app: FastifyInstance, opts: FastifyRegisterOptions<any>, done: (err?: Error) => void) => {
    
    app.decorate("authenticate", async (req, res) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send({ error: "Unauthorized" })
        }

        // TODO: verify token
    });

    done()
})