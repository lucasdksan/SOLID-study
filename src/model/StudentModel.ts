import { createStudent } from "./libs/students/createStudent";
import { searchStudent } from "./libs/students/searchStudent";

const StudentModel = ()=>{
    return {
        createStudent,
        searchStudent
    }
}

export { StudentModel };