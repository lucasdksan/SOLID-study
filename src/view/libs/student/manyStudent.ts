import { StudentViewTypes } from "../../../types/StudentViewTypes";
import { singleStudent } from "./singleStudent";

const manyStudent = (students: StudentViewTypes[])=>{
    const studentArrFilted = [];
    
    for(let i in students){
        let student = singleStudent({
            date: students[i].date,
            id: students[i].id,
            name: students[i].name,
            subjects: students[i].subjects 
        });

        studentArrFilted.push(student);
    }

    return studentArrFilted;
}

export { manyStudent };