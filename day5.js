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
