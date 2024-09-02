"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseManager = void 0;
var CourseManager = /** @class */ (function () {
    function CourseManager() {
        this.courses = [];
    }
    CourseManager.prototype.addCourse = function (course) {
        this.courses.push(course);
        console.log("Course ".concat(course.name, " added successfully"));
    };
    CourseManager.prototype.removeCourse = function (courseName) {
        var index = this.courses.findIndex(function (course) { return course.name === courseName; });
        if (index !== -1) {
            this.courses.splice(index, 1);
            console.log("Course ".concat(courseName, " removed successfully"));
        }
        else {
            console.log("Course ".concat(courseName, " not found"));
        }
    };
    CourseManager.prototype.findCourse = function (courseName) {
        return this.courses.find(function (course) { return course.name === courseName; });
    };
    CourseManager.prototype.displayCourses = function () {
        console.table(this.courses);
    };
    return CourseManager;
}());
exports.CourseManager = CourseManager;
