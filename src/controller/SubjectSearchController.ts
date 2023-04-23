import { Request, Response } from "express";
import { validationRequestValues } from "../libs/validationRequestValues";
import { SubjectModel } from "../model/SubjectModel";
import { SubjectView } from "../view/SubjectView";

const SubjectSearchController = async (req: Request, res: Response)=>{
    const { idTeacher, name, teacher, id } = req.query;
    const idTeacherSubject = validationRequestValues(true, idTeacher);
    const nameTeacher = validationRequestValues(false, teacher);
    const nameSubject = validationRequestValues(false, name);
    const idSubject = validationRequestValues(true, id);
    const subjectModel = SubjectModel();
    const subjectView = SubjectView();

    try {
        const resultSearchSubject = await subjectModel.searchSubject({ id_teacher: idTeacherSubject, name: nameSubject, id: idSubject, teacher: nameTeacher });

        return res.status(200).json(subjectView.manySubject(resultSearchSubject));
    } catch(error){
        return res.status(401).json({ error: "Error Search Subject!" });
    }
}

export { SubjectSearchController };