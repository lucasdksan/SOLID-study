import { Request, Response } from "express";
import { StudentInSubjectModel } from "../model/StudentInSubjectModel";
import { validationRequestValues } from "../libs/validationRequestValues";

const ShowStudentInSubjectController = async (req: Request, res: Response)=>{
    const { idSubject } = req.query;
    const idSubjectFilted = validationRequestValues(true, idSubject);
    const studentInSubjectModel = StudentInSubjectModel();

    try {
        const resultShowStudentInSubject = await studentInSubjectModel.showStudentInSubject({ id_subject: idSubjectFilted });

        return res.status(201).json(resultShowStudentInSubject);
    } catch(error){
        return res.status(401).json({ error: "Error in Show Student in Subject!" });
    }
}

export { ShowStudentInSubjectController };