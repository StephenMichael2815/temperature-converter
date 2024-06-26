// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren) {
  /**converting the value from F to C subtract 32 from the F value, then multiply it by 5/9 */
  const celsius = ((fahren - 32) * 5) / 9;
  return celsius.toFixed(2);
}

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function createMessage(fahren, celc) {
  let sentiment = "";
  if (fahren < 32) {
    sentiment = "very cold";
  } else if (fahren < 64) {
    sentiment = "cold";
  } else if (fahren < 86) {
    sentiment = "warm";
  } else if (fahren < 100) {
    sentiment = "hot";
  } else {
    sentiment = "very hot";
  }
  return `The temperature in F is ${fahren} and in C is ${celc}. It feels  ${sentiment}.`;
}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @pa  ram {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
  return Math.floor(Math.random() * limit);
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
