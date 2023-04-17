import express from "express";
import cors from "cors";

import router from "./routes";

const api = express();

api.use(cors({
    origin: ["http://localhost:5055/"]
}))
api.use(router);

api.listen("5055");