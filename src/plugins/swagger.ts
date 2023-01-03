import "reflect-metadata"
import fp from "fastify-plugin"
import { FastifyInstance, FastifyRegisterOptions } from "fastify";

export default fp(async (app: FastifyInstance, opts: FastifyRegisterOptions<any>, done: (err?: Error) => void) => {
    try {
        await app.register(require('@fastify/swagger'), {
            exposeRoute: true,
            swagger: {
                info: {
                    title: 'Fastify API',
                    description: 'Building a blazing fast REST API with Node.js, Mysql, Fastify and Swagger',
                    version: '0.1.0'
                },
                externalDocs: {
                    url: 'https://swagger.io',
                    description: 'Find more info here'
                },
                host: 'localhost',
                schemes: ['http'],
                consumes: ['application/json'],
                produces: ['application/json'],
                tags: [
                    // TODO - Add tags
                ],
                definitions: {
                    // TODO - Add definitions
                },
                securityDefinitions: {
                    // TODO - Add security definitions
                }
            }
        })
        done()
    } catch (error) {
        console.log(error)
    }
});