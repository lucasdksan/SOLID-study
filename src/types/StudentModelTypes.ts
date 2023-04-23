interface StudentModelCreateTypes {
    date?: string;
    name: string | undefined;
    subjects?: string[];
}

interface StudentModelSearchTypes  {
    id: string | undefined;
    name: string | undefined;
    subjects?: string[];
}

export {
    StudentModelSearchTypes,
    StudentModelCreateTypes
};