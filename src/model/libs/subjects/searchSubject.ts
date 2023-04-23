import { prismaClient } from "../../../database/prismaClient";
import { SubjectModelTypes } from "../../../types/SubjectModelTypes";

const searchSubject = async ({ id, id_teacher, name, teacher }:SubjectModelTypes)=>{
    const resultSubject = await prismaClient.subject.findMany({
        where: {
            OR: {
                id,
                id_teacher,
                name: {
                    contains: name
                },
                teacher: {
                    contains: teacher
                }
            }
        }
    });

    return resultSubject;
}

export { searchSubject };