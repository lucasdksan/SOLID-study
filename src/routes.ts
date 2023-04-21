import express from "express";
import { TeacherCreateController } from "./controller/TeacherCreateController";
import { TeacherSearchController } from "./controller/TeacherSearchController";

const router = express.Router();

router.get("/search-teacher", TeacherSearchController)
router.post("/create-teacher", TeacherCreateController);

export default router;