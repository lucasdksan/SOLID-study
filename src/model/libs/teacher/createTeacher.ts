import { prismaClient } from "../../../database/prismaClient";
import { createDate } from "../../../libs/createDate";
import { lowerCaseStrings } from "../../../libs/lowerCaseStrings";
import { TeacherModelCreateTypes } from "../../../types/TeacherModelTypes";

async function createTeacher({ date, name, subjects }:TeacherModelCreateTypes){
    const newDate = createDate(date as string);
    
    await prismaClient.teacher.create({
        data: {
            subjects: subjects as string,
            date: newDate,
            name: lowerCaseStrings(name as string)
        }
    });
}

export { createTeacher };