import {FastifyReply, FastifyRequest} from "fastify";
import axios from "axios";
import {mixWithStatus} from "../utils";
import * as cheerio from "cheerio";
import {JSDOM} from "jsdom";

export default {
    testScrape: async (req: FastifyRequest, res: FastifyReply) => {
        const baseUrl = "https://www.peakpx.com/en/search?q=anime"
        const axiosRes = await axios.get(baseUrl)

        // const $ = new JSDOM(axiosRes.data);
        // console.log($.window.document.querySelectorAll('img'));

        const $ = cheerio.load(axiosRes.data);
        const urlCollections = [];
        $('link[itemprop="contentUrl"]').get().forEach(item => {
            urlCollections.push(item.attributes);
        });

        const urls = urlCollections.map(item => item[1].value);

        return mixWithStatus(res, {
            data: axiosRes.data,
            collections: urlCollections,
            parsedUrls: urls
        })
    }
}