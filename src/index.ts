import app from "./app"

const server = app()

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
    server.log.info(`server listening on ${address}`)
})