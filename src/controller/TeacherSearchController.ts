import { Request, Response } from "express";
import { TeacherModel } from "../model/TeacherModel";

const TeacherSearchController = async (req: Request, res: Response)=>{
    const { id, name, subjects } = req.query;
    const idTeacher = id as string;
    const nameTeacher = name as string;
    const subjectsTeacher = subjects as string;
    const resultSearch = await TeacherModel().searchTeacher({ id:idTeacher, name:nameTeacher, subjects:subjectsTeacher });

    console.log(resultSearch);
}

export { TeacherSearchController };