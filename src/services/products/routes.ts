export default function productsHandler(server: any, options: any, done: any) {
    server.get('/products', async (request, reply) => {
        const products = await server.db.products.find({});
        reply.send(products);
    });

    done();
}