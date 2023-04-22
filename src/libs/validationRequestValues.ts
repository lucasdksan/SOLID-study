import { lowerCaseStrings } from "./lowerCaseStrings";

const validationRequestValues = (isId: boolean, value: any)=>{
    if(isId){
        return value !== undefined && value !== "" ? String(value) : undefined;
    } else {
        return value !== undefined && value !== "" ? lowerCaseStrings(String(value)) : undefined;
    }
}

export { validationRequestValues };