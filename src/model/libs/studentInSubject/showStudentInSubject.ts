import { prismaClient } from "../../../database/prismaClient"
import { StudentInSubjectShowTypes } from "../../../types/StudentInSubjectModelTypes"

const showStudentInSubject = async ({ id_subject }: StudentInSubjectShowTypes)=>{
    const arrStudents = [];
    const resultStudentInSubject = await prismaClient.subjectStudent.findMany({
        where: {
            id_subject
        }
    });

    for(let i in resultStudentInSubject){
        let studentStats = await prismaClient.student.findFirst({
            where: {
                id: resultStudentInSubject[i].id_student
            }
        });

        arrStudents.push(studentStats);
    }

    return arrStudents;
}

export { showStudentInSubject }