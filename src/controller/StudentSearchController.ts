import { Request, Response } from "express";
import { validationRequestValues } from "../libs/validationRequestValues";
import { StudentModel } from "../model/StudentModel";
import { StudentView } from "../view/StudentView";

const StudentSearchController = async (req: Request, res: Response)=> {
    const { id, name } = req.query;
    const idStudent = validationRequestValues(true, id);
    const nameStudent = validationRequestValues(true, name);
    
    try {
        const resultStudent = await StudentModel().searchStudent({ name: nameStudent, id: idStudent });
        const resultStudentView = StudentView().singleStudent({ date: resultStudent.studentResult?.date, id: resultStudent.studentResult?.id, name: resultStudent.studentResult?.name });
        return res.json(resultStudentView);
    } catch(error) {
        return res.json({ error: "Error Search Student!" });
    }
}

export { StudentSearchController };