import { Request, Response } from "express";
import { StudentModel } from "../model/StudentModel";
import { lowerCaseStrings } from "../libs/lowerCaseStrings";

const StudentCreateController = async (req: Request, res: Response)=>{
    const { name, date } = req.body;

    try {
        await StudentModel().createStudent({ date, name: lowerCaseStrings(name) });

        return res.json({ message: "Successfully Created Student!" });
    } catch(error) {
        return res.status(401).json({ error: "Error creating student!" });
    }
}

export { StudentCreateController };