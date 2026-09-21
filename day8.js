//employee and manager payroll system and create a derived class manager from employee class and override the calculateSalary method to include bonus in the salary calculation.
class Employee{
    constructor(id,name, basicsalary){
        this.id = id;
        this.name = name;
        this.basicsalary = basicsalary;
    }
    calculateSalary(){
        return this.basicsalary;
    }
}

class Manager extends Employee{
    constructor(id,name, basicsalary, incentive){
        super(id,name, basicsalary);
        this.incentive = incentive;
    }
    calculateSalary(){
        return this.basicsalary + this.incentive;
    }
}
const emp1 = new Employee(1, "Omika", 50000);
const manager  = new Manager(2, "Jivisha", 60000, 10000);

console.log(emp1.calculateSalary()); 
console.log(manager.calculateSalary()); 
