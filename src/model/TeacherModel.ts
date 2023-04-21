import { createTeacher } from "./libs/teacher/createTeacher";
import { searchTeacher } from "./libs/teacher/searchTeacher";

const TeacherModel = ()=>{
    return {
        createTeacher: createTeacher,
        searchTeacher: searchTeacher
    };
}

export { TeacherModel };