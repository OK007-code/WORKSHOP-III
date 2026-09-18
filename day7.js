// //with constructor
// class AA{
//     constructor (name){
//         console.log("Constructor called");
//         console.log("Name: " + name);
//     }
// }
// let obj = new AA("Jivisha Gupta");
// // without constructor
// class A{
//     name;
//     name = "Omika Kumar";
//     show(){
//         console.log("Name: " + this.name);
//     }
// }
// let obj2 = new A();
// obj2.show();

//create a class Sec A and display data of 5 students using contructor
class Student {
    constructor(name, age, rollNo) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
    }
    show() {
        console.log("Name: " + this.name + ", Age: " + this.age + ", Roll No: " + this.rollNo);
    }
}
let student1 = new Student("Omika", 20, 1);
let student2 = new Student("Jivisha", 22, 2);
let student3 = new Student("Saanvi", 21, 3);
let student4 = new Student("Kavish", 23, 4);
let student5 = new Student("BoomBoom", 20, 5);

student1.show();
student2.show();
student3.show();
student4.show();
student5.show();
