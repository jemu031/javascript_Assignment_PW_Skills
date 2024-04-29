function isValidEmail(str) {
  const regex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"); //A regex for Email Validation

  if (regex.test(str) == true) {
    console.log(`The given Emailv${str} is Valid, Logging in`);
  } else console.log("Please Enter Valid Email Addres");
}

let email = "jaiminkanpariya3@1@gmail.com";
let email2 = "jaiminkanpariya31@gmail.com";

isValidEmail(email);
isValidEmail(email2);
