import { TeacherViewTypes } from "../../../types/TeacherViewTypes";

const singleTeacher = ({ date, id, name, subjects }:TeacherViewTypes) => {
    return {
        name,
        subjects,
        id
    };
}

export { singleTeacher };