import { createSubject } from "./libs/subjects/createSubject";
import { searchSubject } from "./libs/subjects/searchSubject";

const SubjectModel = ()=>{
    return {
        createSubject,
        searchSubject
    };
}

export { SubjectModel };