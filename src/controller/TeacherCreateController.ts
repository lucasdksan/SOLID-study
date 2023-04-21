import { Request, Response } from "express";
import { TeacherModel } from "../model/TeacherModel";

const TeacherCreateController = async (req: Request, res: Response)=>{
    const { date, name, subjects } = req.body;
    try {
        await TeacherModel().createTeacher({ date, name, subjects });

        return res.json({ message: "Successfully Created Teacher" });
    } catch(err) {
        return res.status(401).json({ error: "Error creating teacher!" });
    }
};

export  { TeacherCreateController };