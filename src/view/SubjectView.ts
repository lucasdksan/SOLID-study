import { manySubject } from "./libs/subject/manySubject";
import { singleSubject } from "./libs/subject/singleSubject";

const SubjectView = ()=>{
    return {
        manySubject,
        singleSubject
    }
}

export { SubjectView };