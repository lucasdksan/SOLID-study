import express from "express";

import router from "./routes";

const api = express();

api.use(router);

api.listen("5055");