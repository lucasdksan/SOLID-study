import { Request, Response } from "express";
import { SubjectModel } from "../model/SubjectModel";
import { lowerCaseStrings } from "../libs/lowerCaseStrings";

const SubjectCreateController = async (req: Request, res: Response)=>{
    const { idTeacher, name, teacher } = req.body;

    try {
        await SubjectModel().createSubject({ id_teacher: idTeacher, name: lowerCaseStrings(name), teacher: lowerCaseStrings(teacher) });

        return res.json({ message: "Successfully Created Subject!" });
    } catch(error){
        return res.status(401).json({ error: "Error Create Subject!" });
    }

}

export { SubjectCreateController };