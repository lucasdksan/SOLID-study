import { SubjectViewTypes } from "../../../types/SubjectViewTypes";
import { singleSubject } from "./singleSubject";

const manySubject = (subjects: SubjectViewTypes[])=>{
    const subjectArrFilted = [];
    
    for(let i in subjects){
        let subject = singleSubject({
            created_at: subjects[i].created_at,
            id_teacher: subjects[i].id_teacher,
            name: subjects[i].name,
            teacher: subjects[i].teacher,
            id: subjects[i].id
        });

        subjectArrFilted.push(subject);
    }

    return subjectArrFilted;
}

export { manySubject };