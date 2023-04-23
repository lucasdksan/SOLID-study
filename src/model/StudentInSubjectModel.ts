import { registerStudentInSubject } from "./libs/studentInSubject/registerStudentInSubject";
import { showStudentInSubject } from "./libs/studentInSubject/showStudentInSubject";
import { showSubjectStudent } from "./libs/studentInSubject/showSubjectStudent";

const StudentInSubjectModel = ()=>{
    return {
        registerStudentInSubject,
        showStudentInSubject,
        showSubjectStudent
    }
}

export { StudentInSubjectModel };