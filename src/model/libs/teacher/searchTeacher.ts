import { prismaClient } from "../../../database/prismaClient";
import { TeacherModelTypes } from "../../../types/TeacherModelTypes";
import { searchTeacherForSubject } from "./searchTeacherForSubject";

async function searchTeacher({ id, name, subjects }: TeacherModelTypes){
    const teacherResult = await prismaClient.teacher.findFirst({
        where: { id: id, OR: { name: { contains: name } } }
    });

    const manyTeacher = await searchTeacherForSubject({ subjects });

    return { teacherResult, manyTeacher };
}

export { searchTeacher };