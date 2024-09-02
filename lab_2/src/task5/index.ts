import { CourseManager } from "./courseManager";
import { OnlineCourse } from "./onlineCourse";

const javaScript = new OnlineCourse('JavaScript', 10);
const webDevelopment = new OnlineCourse('Web Development', 15);
const cpp = new OnlineCourse('C++', 20);

const courseManager = new CourseManager();
courseManager.addCourse(javaScript);
courseManager.addCourse(webDevelopment);
courseManager.addCourse(cpp);

javaScript.registerStudent('Oleg');
javaScript.registerStudent('Kostya');
webDevelopment.registerStudent('Valera');
webDevelopment.registerStudent('Slava');
cpp.registerStudent('Misha');
cpp.registerStudent('Misha');

courseManager.removeCourse('JavaScript');
courseManager.displayCourses();