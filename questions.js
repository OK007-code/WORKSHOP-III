//1. University Management System and add a instance method to display results and determine whether the student has passsed
// class Student {
//     static count=0;
//     constructor(rollNo, name, marks) {
//         this.rollNo = rollNo;
//         this.name = name;
//         this.marks = marks;
//         Student.count++;
//     }
//     displayResult() {
//         console.log("Roll No:", this.rollNo);
//         console.log("Name:", this.name);
//         console.log("Marks:", this.marks);

//         if (this.marks >= 40)
//             console.log("Result: Passed");
//         else
//             console.log("Result: Failed");
//     }
//     static displayCount() {
//         console.log("Total Students:", Student.count);
//     }
// }
// let s1 = new Student(101, "Omika", 85);
// let s2 = new Student(102, "Jivisha", 95);
// let s3 = new Student(103, "Saanvi", 67);
// s1.displayResult();
// s2.displayResult();
// s3.displayResult();
// Student.displayCount();

//bank account mamangement system
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    withdraw(amount){
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Amount withdrawn: ${amount}`);
        } else {
            console.log("Insufficient balance");
        }
    }
    deposit(amount){
        this.balance += amount;
        console.log(`Amount deposited: ${amount}`);
    }
    static bankinfo(account){
        console.log("Bank Name: ABC Bank");
        console.log("Branch: Main Branch");
        console.log("Amount left in account: " + account.balance);
    }
}
let account1 = new BankAccount(1, "Omika", 1000);
account1.deposit(500);
account1.withdraw(300);
BankAccount.bankinfo(account1);

let account2 = new BankAccount(2, "Jivisha", 2000);
account2.deposit(100);
account2.withdraw(1700);
BankAccount.bankinfo(account2);
