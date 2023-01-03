import { FastifyInstance } from "fastify";
import { getAllProductsSchema } from "./schema";

export default function productsHandler(server: FastifyInstance, options: any, done: any) {
    server.get('/products', 
    {
        schema: getAllProductsSchema,
        preValidation: [server.authenticate],
    },
    async (request, reply) => {
        const products = await server.db.products.find();
        reply.send(products);
    });

    server.get('/products/:id', async (request, reply) => {
        const params = request.params as any;
        const product = await server.db.products.findOneBy({ id: params.id });
        reply.send(product);
    });

    server.post('/products', async (request, reply) => {
        const product = await server.db.products.insert(request.body);
        reply.send(product);
    });

    server.put('/products/:id', async (request, reply) => {
        const params = request.params as any;
        const product = await server.db.products.update(params.id, request.body);
        reply.send(product);
    });

    server.delete('/products/:id', async (request, reply) => {
        const params = request.params as any;
        const product = await server.db.products.remove(params.id);
        reply.send(product);
    });

    done();
}