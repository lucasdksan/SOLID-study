import { SubjectViewTypes } from "../../../types/SubjectViewTypes";

const singleSubject = ({ created_at, id_teacher, id, name, teacher }:SubjectViewTypes)=>{
    return {
        id,
        teacher,
        name
    }
}

export { singleSubject };