import { StudentViewTypes } from "../../../types/StudentViewTypes";

const singleStudent = ({ date, id, name, subjects }:StudentViewTypes)=>{
    return {
        id,
        name,
        subjects
    }
}

export { singleStudent };