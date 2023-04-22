import { manyStudent } from "./libs/student/manyStudent";
import { singleStudent } from "./libs/student/singleStudent";

const StudentView = ()=>{
    return {
        singleStudent,
        manyStudent
    };
}

export { StudentView };