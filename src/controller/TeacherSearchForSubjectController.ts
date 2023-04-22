import { Request, Response } from "express";
import { TeacherModel } from "../model/TeacherModel";
import { TeacherView } from "../view/TeacherView";
import { validationRequestValues } from "../libs/validationRequestValues";

const TeacherSearchForSubjectController = async (req: Request, res: Response)=>{
    const { subjects } = req.query;
    const subjectsTeacher = validationRequestValues(false, subjects);

    try {
        const resultTeacher = await TeacherModel().searchTeacherForSubject({ subjects: subjectsTeacher });
        const resultTeacherView = TeacherView().manyTeacher(resultTeacher);

        return res.json(resultTeacherView);
    } catch(error){
        return res.status(401).json({ error: "Error Search Teacher For Subjects" });
    }
}

export { TeacherSearchForSubjectController };