import { createStudent } from "./libs/students/createStudent";
import { registerStudentInSubject } from "./libs/students/registerStudentInSubject";
import { searchStudent } from "./libs/students/searchStudent";

const StudentModel = ()=>{
    return {
        createStudent,
        searchStudent,
        registerStudentInSubject
    }
}

export { StudentModel };