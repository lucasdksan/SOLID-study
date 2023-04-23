import { prismaClient } from "../../../database/prismaClient";
import { StudentInSubjectRegisterTypes } from "../../../types/StudentInSubjectModelTypes";

const registerStudentInSubject = async ({ id_student, id_subject }: StudentInSubjectRegisterTypes)=>{
    await prismaClient.subjectStudent.create({
        data: {
            id_student: id_student as string,
            id_subject: id_subject as string
        }
    });
}

export { registerStudentInSubject };