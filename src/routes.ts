import {FastifyInstance} from "fastify";
import HealthService from "./services/HealthService";
import ScrapeService from "./services/ScrapeService";

export default async function routes(route: FastifyInstance, options: object) {
    route.get("/health", HealthService.checkHealthHandler)
        .get("/testScrape", ScrapeService.testScrape)
}