//Income Tax slabs as per New Regime
/**
 * Up to Rs 3,00,000 Nil
 * Rs 3,00,000 to Rs 6,00,000 5% on income which exceeds Rs 3,00,000
 * Rs 6,00,000 to Rs 900,000 Rs. 15,000 + 10% on income more than Rs 6,00,000
 * Rs 9,00,000 to Rs 12,00,000 Rs. 45,000 + 15% on income more than Rs 9,00,000
 * Rs 12,00,000 to Rs 1500,000 Rs. 90,000 + 20% on income more than Rs 12,00,000
 * Above Rs 15,00,000 Rs. 150,000 + 30% on income more than Rs 15,00,000
 */

let calculateTax = function (income) {
  if (income < 300000) {
    return `No Tax to be Paid`; // Up to Rs 3,00,000 Nil
  } else if (income >= 300000 && income < 600000) {
    exeededIncome = income - 300000;
    return `The Tax to be paid is ${exeededIncome * 0.05}`; //5% on income which exceeds Rs 3,00,000
  } else if (income >= 600000 && income < 900000) {
    exeededIncome = income - 600000;
    return `The Tax to be paid is ${15000 + exeededIncome * 0.1}`; //Rs. 15,000 + 10% on income more than Rs 6,00,000
  } else if (income >= 900000 && income < 1200000) {
    exeededIncome = income - 900000;
    return `The Tax to be paid is ${45000 + exeededIncome * 0.15}`; //Rs. 45,000 + 15% on income more than Rs 9,00,000
  } else if (income >= 1200000 && income < 1500000) {
    exeededIncome = income - 1200000;
    return `The Tax to be paid is ${90000 + exeededIncome * 0.2}`; //Rs. 90,000 + 20% on income more than Rs 12,00,000
  } else if (income >= 1500000) {
    exeededIncome = income - 1500000;
    return `The Tax to be paid is ${150000 + exeededIncome * 0.3}`; // Rs. 150,000 + 30% on income more than Rs 15,00,000
  } else {
    return "Please enter appropriate income";
  }
};

let incomeTax1 = calculateTax(130000);
let incomeTax2 = calculateTax(400000);
let incomeTax3 = calculateTax(800000);
let incomeTax4 = calculateTax(1100000);
let incomeTax5 = calculateTax(1300000);
let incomeTax6 = calculateTax(2000000);
console.log(incomeTax1);
console.log(incomeTax2);
console.log(incomeTax3);
console.log(incomeTax4);
console.log(incomeTax5);
console.log(incomeTax6);
