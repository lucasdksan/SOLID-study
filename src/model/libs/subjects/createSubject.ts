import { prismaClient } from "../../../database/prismaClient"
import { SubjectModelCreateTypes } from "../../../types/SubjectModelTypes"

const createSubject = async ({ id_teacher, name, teacher }: SubjectModelCreateTypes)=>{
    await prismaClient.subject.create({
        data: {
            id_teacher: id_teacher as string,
            name: name as string,
            teacher: teacher as string
        }
    });
}

export { createSubject };