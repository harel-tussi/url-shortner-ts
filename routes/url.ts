import { Router } from "express";
import { getUrl, addUrl } from "../controllers/url";
const router: Router = Router();

// Routes
/**
 * @swagger
 * /:shortUrl:
 *  get:
 *    description: Use to get full url from shortened url
 *    parameters:
 *      - in: path
 *        name: shortUrl
 *        schema:
 *          type: string
 *        required: true
 *        description: shortUrl for getting the full url
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *        description: Request failed
 */
router.route("/:shortUrl").get(getUrl);

/**
 * @swagger
 * /:
 *  post:
 *    description: Use to short a url
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *        description: Request failed
 */
router.route("/").post(addUrl);

export { router };
