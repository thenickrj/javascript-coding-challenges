const readLineSync = require("readline-sync");

const Name = readLineSync.question("So What's Your Name : ");

console.log("Hey " + Name + ".Hope you're doing great!!");

console.log("So let's test your maths skills");
const status = readLineSync.question("Are you ready: Y/N: ");
count = 0;
if (status == "Y") {
  for (var i = 0; i <= 5; i++) {
    var a = Math.floor(Math.random() * 100); // returns a random integer from 0 to 100
    var b = Math.floor(Math.random() * 100); // returns a random integer from 0 to 100
    console.log(a + " X " + b + " is how much??");
    var userAns = readLineSync.question("Enter Your Answer Please: ");
    if (userAns == a * b) {
      console.log("Yayy it's right");
      count++;
    } else {
      console.log("Nope wrong answer");
    }
    if (i == 5) {
      console.log("Your score out of 5 is..." + count);
    }
  }
} else {
  console.log("Ok Byeee then!!");
}
