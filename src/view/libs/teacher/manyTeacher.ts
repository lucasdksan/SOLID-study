import { TeacherViewTypes } from "../../../types/TeacherViewTypes";
import { singleTeacher } from "./singleTeacher";

const manyTeacher = (teachers: TeacherViewTypes[])=>{
    const teacherArrLen = teachers.length;
    const teacherArrFilted = [];

    for(let i = 0; i < teacherArrLen; i++){
        let teacher = singleTeacher({ 
            date: teachers[i].date, 
            id: teachers[i].id,
            name: teachers[i].name,
            subjects: teachers[i].subjects
        });

        teacherArrFilted.push(teacher);
    }

    return teacherArrFilted;
}

export { manyTeacher }