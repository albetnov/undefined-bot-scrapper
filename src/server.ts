import fastify from "fastify";
import cors from "@fastify/cors";
import routes from "./routes";
import {mixWithStatus} from "./utils";

// Enable fastify logger
const app = fastify({logger: true})

// Don't forget to register the cors.
app.register(cors, {
    allowedHeaders: "*",
    origin: "*"
})

app.get("/", (req, res) => {
    return mixWithStatus(res, {
        message: "Welcome to Undefined Bot Scrapper Micro Service!"
    })
})

// Register our routes with "api" as its prefix.
app.register(routes, {
    prefix: "api"
})

// Listen to the given port. Either env or default to 3000.
app.listen({port: (process.env.PORT as unknown as number) || 3000}, function (err, address) {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }

    console.log("Server listening at " + address)
})