import { createTeacher } from "./libs/teacher/createTeacher";
import { searchTeacher } from "./libs/teacher/searchTeacher";
import { searchTeacherForSubject } from "./libs/teacher/searchTeacherForSubject";

const TeacherModel = ()=>{
    return {
        createTeacher,
        searchTeacher,
        searchTeacherForSubject
    };
}

export { TeacherModel };