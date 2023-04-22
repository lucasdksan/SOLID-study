import { Request, Response } from "express";
import { TeacherModel } from "../model/TeacherModel";
import { TeacherView } from "../view/TeacherView";
import { validationRequestValues } from "../libs/validationRequestValues";

const TeacherSearchController = async (req: Request, res: Response)=>{
    const { id, name } = req.query;
    const idTeacher = validationRequestValues(true, id);
    const nameTeacher = validationRequestValues(false, name);

    try {
        const resultTeacher = await TeacherModel().searchTeacher({ id: idTeacher, name: nameTeacher });
        const resultView = TeacherView().singleTeacher({ id: resultTeacher.teacherResult?.id, name: resultTeacher.teacherResult?.name, subjects: resultTeacher.teacherResult?.subjects, date: resultTeacher.teacherResult?.date });

        return res.json(resultView);
    } catch(error){
        return res.status(401).json({ error: "Error Search Teacher!" });
    }
}

export { TeacherSearchController };