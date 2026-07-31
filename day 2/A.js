console.log("\nPercentage");

function totalMarks(math, english, science) {
    return math + english + science;
}

function percentage(total) {
    return (total / 300) * 100;
}

var total = totalMarks(80, 75, 90);
var percent = percentage(total);

console.log("Total Marks:", total);
console.log("Percentage:", percent + "%");

