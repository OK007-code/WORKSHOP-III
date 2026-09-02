let c={
    age:20,
    job:"developer",
    details:function(){
        console.log(`I am ${this.age} years old and I work as a ${this.job}.`);
    }
}
//create an object employee with: name= Rahul, salary 5000 create a method increaseSalary that increases the salary using this
let employee = {
    name: "Rahul",
    salary: 5000,
    increaseSalary: function(amount) {
        this.salary += amount;
    }
};
console.log(`Before increase: ${employee.salary}`);
employee.increaseSalary(1000);
console.log(`After increase: ${employee.salary}`);

//create an object student with: name= John, grade 10 create a method addMarks() that adds 5 marks to the exixiting marks create another method display() that displays the name, grade and marks of the student
let student = {
    name: "John",
    grade: 10,
    marks: 0,
    addMarks: function(amount) {
        this.marks += amount;
    },
    display: function() {
        console.log(`Name: ${this.name}, Grade: ${this.grade}, Marks: ${this.marks}`);
    }
};
student.addMarks(5);
student.display();

//create a function clg and use dep and class as obj and display details
function college(){
    let dep={
        name:"Computer Science",
    };
    let class_obj={
        name:"Class A",
    };
    console.log("Department:", dep.name);
    console.log("Class:", class_obj.name);
}
college();