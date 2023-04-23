import { Request, Response } from "express";
import { TeacherModel } from "../model/TeacherModel";
import { lowerCaseStrings } from "../libs/lowerCaseStrings";

const TeacherCreateController = async (req: Request, res: Response)=>{
    const { date, name, subjects } = req.body;
    const teacherModel = TeacherModel();

    try {
        await teacherModel.createTeacher({ date, name: lowerCaseStrings(name), subjects: lowerCaseStrings(subjects) });

        return res.status(201).json({ message: "Successfully Created Teacher" });
    } catch(err) {
        return res.status(401).json({ error: "Error creating teacher!" });
    }
};

export  { TeacherCreateController };