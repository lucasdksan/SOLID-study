import { prismaClient } from "../../../database/prismaClient";
import { createDate } from "../../../libs/createDate";
import { lowerCaseStrings } from "../../../libs/lowerCaseStrings";
import { StudentModelCreateTypes } from "../../../types/StudentModelTypes";

const createStudent = async ({ date, name }:StudentModelCreateTypes)=>{
    const newDate = createDate(date as string);

    await prismaClient.student.create({
        data: {
            date: newDate,
            name: lowerCaseStrings(name as string)
        }
    });
}

export { createStudent };