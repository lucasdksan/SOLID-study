import { Request, Response } from "express";
import { StudentModel } from "../model/StudentModel";
import { lowerCaseStrings } from "../libs/lowerCaseStrings";

const StudentCreateController = async (req: Request, res: Response)=>{
    const { name, date } = req.body;
    const studentModel = StudentModel();

    try {
        await studentModel.createStudent({ date, name: lowerCaseStrings(name) });

        return res.status(201).json({ message: "Successfully Created Student!" });
    } catch(error) {
        console.log(error);
        return res.status(401).json({ error: "Error creating student!" });
    }
}

export { StudentCreateController };