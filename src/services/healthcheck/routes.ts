import { FastifyInstance } from "fastify";

export default function healthCheckHandler(server: FastifyInstance, options: any, done: any) {
    server.get('/healthcheck', 
    {
        onRequest: (request, reply, done) => {
            console.log('onRequest');
            done();
        },
        onSend: (request, reply, payload, done) => {
            console.log('onSend');
            done();
        },
        onResponse: (request, reply, done) => {
            console.log('onResponse');
            done();
        },
        preParsing: (request, reply, payload, done) => {
            console.log('preParsing');
            // throw new Error('test');
            done();
        },
        preValidation: (request, reply, done) => {
            console.log('preValidation');
            done();
        },
        preHandler: (request, reply, done) => {
            console.log('preHandler');
            done();
        },
        preSerialization: (request, reply, payload, done) => {
            console.log('preSerialization');
            done();
        },
        onTimeout: (request, reply, done) => {
            console.log('onTimeout');
            done();
        },
        onError: (request, reply, error, done) => {
            console.log('onError');
            done();
        },
        
    },
    async (request, reply) => {
        reply.send({ status: 'ok' });
    });

    done();
}