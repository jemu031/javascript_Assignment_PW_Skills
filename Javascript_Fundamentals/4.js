function matchAndExtract(regexPattern, inputString) {
  const regex = new RegExp(regexPattern);

  const match = regex.exec(inputString);

  if (!match) {
    return null;
  }

  const extractedParts = {
    fullMatch: match[0], // Full matched text
    day: match[1], // Capture group for day
    month: match[2], // Capture group for month
    year: match[3], // Capture group for year
  };

  return extractedParts;
}

const inputString = "Today's date is 28/04/2024";
const regexPattern = /(\d{2})\/(\d{2})\/(\d{4})/;

const result = matchAndExtract(regexPattern, inputString);

if (result) {
  console.log("Full Match:", result.fullMatch); // Output: Full Match: 28/04/2024
  console.log("Day:", result.day); // Output: Day: 28
  console.log("Month:", result.month); // Output: Month: 04
  console.log("Year:", result.year); // Output: Year: 2024
} else {
  console.log("No match found.");
}
