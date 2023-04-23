import { prismaClient } from "../../../database/prismaClient";
import { TeacherModelSearchTypes } from "../../../types/TeacherModelTypes";

async function searchTeacher({ id, name }: TeacherModelSearchTypes){
    const teacherResult = await prismaClient.teacher.findFirst({
        where: { OR: { name: { contains: name }, id: id } }
    });

    return { teacherResult };
}

export { searchTeacher };