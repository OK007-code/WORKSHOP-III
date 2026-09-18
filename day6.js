// q1: create a student object with methods for updating and displaying its details
// const student = {
//     name: "John",
//     grade: "A",
//     marks: 85,
//     addMarks: function() {
//         this.marks += 5;
//     },
//     updateGrade: function() {
//         this.grade = "A+";
//     },
//     display: function() {
//         console.log(`Name: ${this.name}, Grade: ${this.grade}, Marks: ${this.marks}`);
//     }
// };
// student.addMarks();
// student.updateGrade();
// student.display();

// let array=[1,2,3,4,5];
// function add(...number){
//     console.log(number);
// }
// add(1,2,3);

//q: what is rest operator in js
//ans: The rest operator in JavaScript is represented by three dots (...) and is used to collect multiple elements into a single array. It allows you to represent an indefinite number of arguments as an array. It is commonly used in function parameters to handle variable numbers of arguments.
//q2:create a function that takes any number of arguments and returns their sum using the rest operator
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));

//q3: 
// function displayDetails(name, age, ...hobbies) {
//     console.log(`Name: ${name}, Age: ${age}`);
//     console.log(`Hobbies: ${hobbies.join(", ")}`);
// }

// displayDetails("Alice", 25, "reading", "swimming", "coding");

//q4: give output hello utkarsh nd total =100 using collecting rest operator
// function greetAndSum(name, ...numbers) {
//     const total = numbers.reduce((sum, num) => sum + num, 0);
//     console.log(`Hello ${name}, Total = ${total}`);
// }
// greetAndSum("Omika", 10, 20, 30, 40); 

//q5:create a rest operator that take input from user and provide the sum of that number on browser
// function calculateSum() {
//     sumNumbers(
//         parseInt(document.getElementById("num1").value, 10),
//         parseInt(document.getElementById("num2").value, 10),
//         parseInt(document.getElementById("num3").value, 10)
//     );
// }
// function sumNumbers(...numbers) {
//     const total = numbers.reduce((sum, num) => sum + num, 0);
//     document.getElementById("result").innerHTML = `Sum: ${total}`;
// }

function printSum(...numbers) {
    document.write(`Sum = ${numbers.reduce((sum, number) => sum + number, 0)}`);
}
const numbers = prompt("Enter numbers separated by spaces:")
    .split(" ")
    .map(number => parseInt(number));
printSum(...numbers);
