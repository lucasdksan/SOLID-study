import { manyTeacher } from "./libs/teacher/manyTeacher";
import { singleTeacher } from "./libs/teacher/singleTeacher";

const TeacherView = ()=>{
    return {
        singleTeacher,
        manyTeacher
    }
}

export { TeacherView };