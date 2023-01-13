// boilerplate for the response.
import {FastifyReply} from "fastify";

export const mixWithStatus = <T>(reply: FastifyReply, data: T, code?: number) => {
    const statusCode = code ?? reply.statusCode;
    return {
        data,
        statusCode: statusCode,
        success: statusCode >= 200 && statusCode < 400
    }
}
