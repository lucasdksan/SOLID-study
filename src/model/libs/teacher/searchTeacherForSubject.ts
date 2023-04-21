import { prismaClient } from "../../../database/prismaClient";
import { TeacherModelTypes } from "../../../types/TeacherModelTypes";

async function searchTeacherForSubject({ subjects }: TeacherModelTypes){
    const searchTeacherForSubjectResult = await prismaClient.teacher.findMany({
        where: {
            subjects: subjects
        }
    });

    return searchTeacherForSubjectResult;
}

export { searchTeacherForSubject };