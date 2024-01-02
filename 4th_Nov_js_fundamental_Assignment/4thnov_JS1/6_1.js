//Defining the variables that takes input from user
let weight = prompt('Please provide weight in kg')
let height = prompt('Please provide height in ft')

//defining simple interest by using formula
let BMI = weight/ (height*height)

console.log(`The BMI of provided value is: ${BMI} per kg/ft2`);

//Notice that this only works in browser 
