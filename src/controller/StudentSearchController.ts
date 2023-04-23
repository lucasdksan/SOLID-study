import { Request, Response } from "express";
import { validationRequestValues } from "../libs/validationRequestValues";
import { StudentModel } from "../model/StudentModel";
import { StudentView } from "../view/StudentView";

const StudentSearchController = async (req: Request, res: Response)=> {
    const { id, name } = req.query;
    const idStudent = validationRequestValues(true, id);
    const nameStudent = validationRequestValues(true, name);
    const studentModel = StudentModel();
    const studentView = StudentView();
    
    try {
        const resultStudent = await studentModel.searchStudent({ name: nameStudent, id: idStudent });
        const resultStudentView = studentView.singleStudent({ date: resultStudent.studentResult?.date, id: resultStudent.studentResult?.id, name: resultStudent.studentResult?.name });
        
        return res.status(200).json(resultStudentView);
    } catch(error) {
        return res.json({ error: "Error Search Student!" });
    }
}

export { StudentSearchController };