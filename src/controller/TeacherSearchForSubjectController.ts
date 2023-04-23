import { Request, Response } from "express";
import { TeacherModel } from "../model/TeacherModel";
import { TeacherView } from "../view/TeacherView";
import { validationRequestValues } from "../libs/validationRequestValues";

const TeacherSearchForSubjectController = async (req: Request, res: Response)=>{
    const { subjects } = req.query;
    const subjectsTeacher = validationRequestValues(false, subjects);
    const teacherModel = TeacherModel();
    const teacherView = TeacherView();

    try {
        const resultTeacher = await teacherModel.searchTeacherForSubject({ subjects: subjectsTeacher });
        const resultTeacherView = teacherView.manyTeacher(resultTeacher);

        return res.status(200).json(resultTeacherView);
    } catch(error){
        return res.status(401).json({ error: "Error Search Teacher For Subjects" });
    }
}

export { TeacherSearchForSubjectController };