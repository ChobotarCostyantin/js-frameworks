import { Course } from "./course";

export class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[] = [];

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
    }
    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
        } else {
            console.log(`Student ${student} is already registered`);
        }
    }
    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}