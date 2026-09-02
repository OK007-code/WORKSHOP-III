// console.log("===== Variables =====");
// var text="Something";
// console.log(text);

// var a=40;
// var b=50;
// if(a>b){
//     console.log("a is greater than b, value of a is: "+a);
// }else{
//     console.log("b is greater than a, value of b is: "+b);
// }
// console.log("===== Functions =====");
// function abes(){
//     console.log("This is a function");
//     console.log("welcome to abes");
// }
// abes();

// console.log("===== Functions =====");
// function add(a,b){
//     return a+b;
// }
// var result=add(10,20);

// console.log("======= Deault Arguments =======");
// function fullName(fName = "ABES", lName="EC"){
// return fName+" "+lName;
// }
// console.log(fullName());
// console.log(fullName("omika","Kumar"));

console.log("===========PERCENTAGE================");
function totalMarks(math , eng , sci){
    return math + eng + sci;
}
function percentage(total){
    return (total / 300 * 100)
}
total = totalMarks(95 , 99 , 100);
console.log("TOTAL MARKS" , total);
console.log("PERCENTAGE" , percentage (total) , "x" );
