import { Request, Response } from "express";
import { TeacherModel } from "../model/TeacherModel";
import { lowerCaseStrings } from "../libs/lowerCaseStrings";

const TeacherCreateController = async (req: Request, res: Response)=>{
    const { date, name, subjects } = req.body;
    try {
        await TeacherModel().createTeacher({ date, name: lowerCaseStrings(name), subjects: lowerCaseStrings(subjects) });

        return res.json({ message: "Successfully Created Teacher" });
    } catch(err) {
        return res.status(401).json({ error: "Error creating teacher!" });
    }
};

export  { TeacherCreateController };