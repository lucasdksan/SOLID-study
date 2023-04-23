import { prismaClient } from "../../../database/prismaClient";
import { StudentSubjectTypes } from "../../../types/StudentSubjectTypes";

const registerStudentInSubject = async ({ id_student, id_subject }:StudentSubjectTypes)=>{
    await prismaClient.subjectStudent.create({
        data: {
            id_student: id_student as string,
            id_subject: id_subject as string
        }
    });
}

export { registerStudentInSubject };