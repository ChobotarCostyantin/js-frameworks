"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineCourse = void 0;
var OnlineCourse = /** @class */ (function () {
    function OnlineCourse(name, duration) {
        this.students = [];
        this.name = name;
        this.duration = duration;
    }
    OnlineCourse.prototype.registerStudent = function (student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
        }
        else {
            console.log("Student ".concat(student, " is already registered"));
        }
    };
    OnlineCourse.prototype.isStudentRegistered = function (student) {
        return this.students.includes(student);
    };
    return OnlineCourse;
}());
exports.OnlineCourse = OnlineCourse;
