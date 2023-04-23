import { Request, Response } from "express";
import { StudentInSubjectModel } from "../model/StudentInSubjectModel";
import { validationRequestValues } from "../libs/validationRequestValues";

const RegisterStudentInSubjectController = async (req: Request, res: Response)=> {
    const { idStudent, idSubject } = req.body;
    const idStudentRegister = validationRequestValues(true, idStudent);
    const idSubjectRegister = validationRequestValues(true, idSubject);
    const studentInSubjectModel = StudentInSubjectModel();

    try {
        await studentInSubjectModel.registerStudentInSubject({ id_student: idStudentRegister, id_subject: idSubjectRegister });

        return res.status(201).json({ message: "Successfully Register Student in Subject!" });
    } catch(error){
        return res.status(401).json({ error: "Error in Registering the Subject!" });
    }
}

export { RegisterStudentInSubjectController };