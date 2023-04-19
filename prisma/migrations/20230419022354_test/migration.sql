-- CreateTable
CREATE TABLE "teachers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "subjects" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "subjects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "teacher" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SubjectStudent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_student" TEXT NOT NULL,
    "id_subject" TEXT NOT NULL,
    CONSTRAINT "SubjectStudent_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "students" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SubjectStudent_id_subject_fkey" FOREIGN KEY ("id_subject") REFERENCES "subjects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "teachers_subjects_key" ON "teachers"("subjects");
