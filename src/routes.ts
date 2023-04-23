import express from "express";

import { TeacherCreateController } from "./controller/TeacherCreateController";
import { TeacherSearchController } from "./controller/TeacherSearchController";
import { TeacherSearchForSubjectController } from "./controller/TeacherSearchForSubjectController";
import { StudentCreateController } from "./controller/StudentCreateController";
import { StudentSearchController } from "./controller/StudentSearchController";
import { SubjectCreateController } from "./controller/SubjectCreateController";
import { SubjectSearchController } from "./controller/SubjectSearchController";
import { StudentRegisterInSubjectController } from "./controller/StudentRegisterInSubjectController";

const router = express.Router();

router.get("/search-teacher", TeacherSearchController);
router.get("/search-teacher-for-subject", TeacherSearchForSubjectController);
router.get("/search-student", StudentSearchController);
router.get("/search-subjects", SubjectSearchController);

router.post("/create-teacher", TeacherCreateController);
router.post("/create-student", StudentCreateController);
router.post("/create-subject", SubjectCreateController);
router.post("/register-student", StudentRegisterInSubjectController);

export default router;