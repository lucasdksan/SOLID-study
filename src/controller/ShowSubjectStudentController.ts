import { Request, Response } from "express";
import { validationRequestValues } from "../libs/validationRequestValues";
import { StudentInSubjectModel } from "../model/StudentInSubjectModel";

const ShowSubjectStudentController = async (req:Request, res: Response)=>{
    const { idStudent } = req.query;
    const idStudentFilted = validationRequestValues(true, idStudent);
    const studentInSubjectModel = StudentInSubjectModel();

    try {
        const resultSubjects = await studentInSubjectModel.showSubjectStudent({ id_student: idStudentFilted });

        return res.json(resultSubjects)
    } catch(error) {
        return res.status(401).json({ error: "Error in Subjects Stundet!" });
    }

}

export { ShowSubjectStudentController };