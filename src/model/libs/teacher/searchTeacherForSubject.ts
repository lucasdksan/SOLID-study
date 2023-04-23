import { prismaClient } from "../../../database/prismaClient";
import { TeacherModelSearchForSubjectTypes } from "../../../types/TeacherModelTypes";

async function searchTeacherForSubject({ subjects }: TeacherModelSearchForSubjectTypes){
    const searchTeacherForSubjectResult = await prismaClient.teacher.findMany({
        where: {
            subjects: subjects
        }
    });

    return searchTeacherForSubjectResult;
}

export { searchTeacherForSubject };