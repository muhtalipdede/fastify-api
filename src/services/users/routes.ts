export default function usersHandler(server: any, options: any, done: any) {
    server.get('/users', async (request, reply) => {
        const users = await server.db.users.find({});
        reply.send(users);
    });

    done();
}