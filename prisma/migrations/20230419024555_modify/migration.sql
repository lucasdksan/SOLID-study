/*
  Warnings:

  - You are about to drop the `SubjectStudent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_teacher` to the `subjects` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SubjectStudent";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "subjects_students" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_student" TEXT NOT NULL,
    "id_subject" TEXT NOT NULL,
    CONSTRAINT "subjects_students_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "students" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "subjects_students_id_subject_fkey" FOREIGN KEY ("id_subject") REFERENCES "subjects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_subjects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "id_teacher" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "teacher" TEXT NOT NULL
);
INSERT INTO "new_subjects" ("created_at", "id", "name", "teacher") SELECT "created_at", "id", "name", "teacher" FROM "subjects";
DROP TABLE "subjects";
ALTER TABLE "new_subjects" RENAME TO "subjects";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
