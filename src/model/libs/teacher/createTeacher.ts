import { prismaClient } from "../../../database/prismaClient";
import { TeacherModelTypes } from "../../../types/TeacherModelTypes";

async function createTeacher({ date, name, subjects }:TeacherModelTypes){
    const newDate = new Date(date as string);
    
    await prismaClient.teacher.create({
        data: {
            subjects: subjects as string,
            date: newDate,
            name: name as string
        }
    });
}

export { createTeacher };