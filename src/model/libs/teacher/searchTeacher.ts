import { prismaClient } from "../../../database/prismaClient";
import { TeacherModelTypes } from "../../../types/TeacherModelTypes";

async function searchTeacher({ id, name }: TeacherModelTypes){
    const teacherResult = await prismaClient.teacher.findFirst({
        where: { OR: { name: { contains: name }, id: id } }
    });

    return { teacherResult };
}

export { searchTeacher };