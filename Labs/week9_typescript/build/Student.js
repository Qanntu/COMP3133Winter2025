"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//defination of the Student class
class Student {
    //class attributes must be initialized
    //either with default values or in the constructor
    constructor(studID, firstName, lastName, percentage) {
        this.lastName = "NA";
        this.percentage = 0.0;
        this.studID = studID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.percentage = percentage;
    }
    showDetails() {
        console.log(`\nStudent ID : ${this.studID}`);
        console.log(`Student Name : ${this.firstName} ${this.lastName}`);
        console.log(`Percentage : ${this.percentage}`);
    }
}
exports.default = Student;
// 1.
// class Example{
// }
// export default Example
// 2.
// export default class Example2{
// }
// //there can be only one export default in a file
// 3.
// let collegeName = "XYZ College"
// export {collegeName}
// 4.
// export let deptName = "Computer Science"
