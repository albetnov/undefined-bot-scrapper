import {FastifyReply, FastifyRequest} from "fastify";
import {mixWithStatus} from "../utils";

export default {
    checkHealthHandler: (req: FastifyRequest, res: FastifyReply) => {
        return mixWithStatus(res, {
            message: "Ok!"
        });
    }
}