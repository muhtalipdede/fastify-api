import "reflect-metadata"
import fp from "fastify-plugin"
import { createConnection, getConnectionOptions } from "typeorm"
import { Product } from "../services/products/entity"
import { User } from "../services/users/entity"

export default fp(async server => {
    try {
        const connectionOptions = await getConnectionOptions()
        Object.assign(connectionOptions, {
            options: { encrypt: true },
            entities: [User, Product]
        })

        console.log(`connecting to database: ${connectionOptions.type}...`)
        const connection = await createConnection(connectionOptions)
        console.log("database connected")

        server.decorate("db", {
            users: connection.getRepository(User),
            products: connection.getRepository(Product)
        })
    } catch (error) {
        console.log(error)
        console.log("make sure you have set .env variables - see .env.development")
    }
})