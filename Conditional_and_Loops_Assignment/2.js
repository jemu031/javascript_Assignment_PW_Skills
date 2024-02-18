//A program that grades st9dents based on their marks

let student_marks = 49;

if (student_marks >= 90) {
  console.log("Congratualtion for getting an A grade !");
} else if (student_marks >= 70 && student_marks < 90)
  console.log(
    "Good work for getting B grade but there is still some improvement required"
  );
else if (student_marks >= 50 && student_marks < 70)
  console.log("You've got C grade and you need to practice more");
else {
  console.log("You've got F grade and You need to attend extra classes ");
}
