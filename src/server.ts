import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import router from "./routes";

const api = express();

api.use(cors());
api.use(bodyParser.json());
api.use(router);

api.listen("5055");