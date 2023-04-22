import { prismaClient } from "../../../database/prismaClient";
import { StudentModelTypes } from "../../../types/StudentModelTypes";

const searchStudent = async ({ id, name }:StudentModelTypes)=>{
    const studentResult = await prismaClient.student.findFirst({
        where: { OR: { name: { contains: name }, id: id } }
    });

    return { studentResult };
}

export { searchStudent };