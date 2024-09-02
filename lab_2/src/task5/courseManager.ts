import { Course } from "./course";

export class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Course ${course.name} added successfully`);
    }

    removeCourse(courseName: string): void {
        const index = this.courses.findIndex(course => course.name === courseName);
        if (index !== -1) {
            this.courses.splice(index, 1);
            console.log(`Course ${courseName} removed successfully`);
        } else {
            console.log(`Course ${courseName} not found`);
        }
    }
    findCourse(courseName: string): Course | undefined {
        return this.courses.find(course => course.name === courseName);
    }
    displayCourses(): void {
        console.table(this.courses);
    }
}