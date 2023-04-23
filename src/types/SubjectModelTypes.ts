interface SubjectModelCreateTypes {
    name?: string;
    id_teacher?: string;
    teacher?: string;
}

interface SubjectModelSearchTypes {
    id?: string;
    id_teacher?: string;
    name?: string;
    teacher?: string;
}

export {
    SubjectModelCreateTypes,
    SubjectModelSearchTypes
};