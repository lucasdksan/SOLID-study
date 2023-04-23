import { prismaClient } from "../../../database/prismaClient";
import { SubjectStudentShowTypes } from "../../../types/StudentInSubjectModelTypes";

const showSubjectStudent = async ({id_student }:SubjectStudentShowTypes)=>{
    const arrSubjects = [];
    const resultSubjectStudent = await prismaClient.subjectStudent.findMany({
        where: {
            id_student
        }
    })

    for(let i in resultSubjectStudent){
        let subject = await prismaClient.subject.findFirst({
            where: {
                id: resultSubjectStudent[i].id_subject
            }
        });

        console.log(subject)

        arrSubjects.push(subject);
    }

    return arrSubjects;
}

export { showSubjectStudent };