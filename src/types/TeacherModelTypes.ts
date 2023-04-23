interface TeacherModelCreateTypes {
    name: string | undefined;
    subjects?: string;
    date?: string;
}

interface TeacherModelSearchTypes  {
    id?: string;
    name: string | undefined;
    subjects?: string;
}

interface TeacherModelSearchForSubjectTypes {
    subjects?: string;
}

export { 
    TeacherModelCreateTypes, 
    TeacherModelSearchTypes, 
    TeacherModelSearchForSubjectTypes 
};