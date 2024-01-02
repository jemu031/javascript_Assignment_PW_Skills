//Defining the variables that takes input from user
let principle = prompt('Please provide principle')
let rate = prompt('Please provide rate')
let time = prompt('Please provide time in year')

//defining simple interest by using formula
let simpleInterest = (principle*rate*time)/100 

console.log(`The simle interest of provided value is: ${simpleInterest}% per year`);

//Notice that this only works in browser 
