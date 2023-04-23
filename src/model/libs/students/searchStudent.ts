import { prismaClient } from "../../../database/prismaClient";
import { StudentModelSearchTypes } from "../../../types/StudentModelTypes";

const searchStudent = async ({ id, name }:StudentModelSearchTypes)=>{
    const studentResult = await prismaClient.student.findFirst({
        where: { OR: { name: { contains: name }, id: id } }
    });

    return { studentResult };
}

export { searchStudent };