// import all necessary modules form node or locally
const chalk = require('chalk');
const readline = require('readline-sync');
const randomcolor = require('randomcolor');

// Object with accepted inputs
const allowedInput = {
  color: [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'pink',
    'monochrome',
  ],
  hue: ['light', 'dark'],
};

//initialize a random hex color variable and print it out
let colorChoice = randomcolor();
const symbol = '#';
let measures;
let height = 5;
let width = 19;

// get the user input from the process.argv if supplied//const Args = process.argv[2].split('x');
// creates an array from third argument onwards
const args = process.argv.slice(2);

//initialize color choices
let hueChoice;
let luminosityChoice;

if (/\d*x\d*/.test(args[0]) === true) {
  //initialize min height and width
  const minHeight = 5;
  const minWidth = 19;
  // test if first argument matches Regex (digtsxdigits)
  measures = process.argv[2].split('x'); //generate array from string
  width = parseInt(measures[0]);
  height = parseInt(measures[1]);
  if (height < minHeight) {
    height = minHeight;
    console.log(
      `The height is oo small, I set the height to the min. value ${minHeight}.`,
    );
  }
  if (width < minWidth) {
    width = minWidth;
    console.log(
      `The width is too small, I set the height to the min. value ${minWidth}.`,
    );
  }
  hueChoice = args[1]; //saves hue choice, first user supplied argument
  luminosityChoice = args[2];
} // saves luminosity choice, second user supplied argument

//if the first argument is ask, ask for input:
else if (args[0] === 'ask') {
  hueChoice = readline.question('Enter a color: ');
  luminosityChoice = readline.question('Enter a hue (light/dark): ');
  if (
    allowedInput.color.includes(hueChoice) === false ||
    allowedInput.hue.includes(luminosityChoice) === false
  ) {
    console.log(
      `These are not valid arguments. Please use Color: ${allowedInput.color} and Hue: ${allowedInput.hue} `,
    );
  }
} else {
  hueChoice = args[0]; //saves hue choice, first user supplied argument
  luminosityChoice = args[1];
} // saves luminosity choice, second user supplied argument

userSelectedColorAsHex = randomcolor({
  luminosity: luminosityChoice,
  hue: hueChoice,
}); // converts color name into hex value

if (userSelectedColorAsHex !== undefined) {
  //checks if a valid color was entered by the user
  colorChoice = userSelectedColorAsHex; // updates color Choice
} else {
  console.log(
    'Not a valid color. First arguments needs to be a hue (red/green/blue), second argument needs to be a luminosity (light/dark). I picked a random color for you. Hope you like it:',
  );
}

function makeBlock(width = 30, height = 10, symbol = '#', color = '#ffffff') {
  const blockHeight = Math.floor((height - 3) / 2);
  const upperBlockHeight = blockHeight;
  let lowerBlockHeight = blockHeight;
  if (height % 2 === 0) {
    lowerBlockHeight += 1;
  }
  const arrLine = new Array(width).fill(symbol);
  const line = arrLine.join('');
  //prints first half
  for (let i = 0; i < upperBlockHeight; i++) {
    console.log(chalk.hex(color)(line));
  }

  //prints 'label'
  const margin = 5;
  let leftBlock = Math.floor((width - margin * 2 - 7) / 2);
  let rightBlock = leftBlock;
  if (width % 2 === 0) {
    rightBlock += 1;
  }

  const leftArr = new Array(margin).fill(symbol);
  const rightArr = new Array(margin).fill(symbol);
  const gap = new Array(width - margin * 2).fill(' ');
  let lineWithGap = leftArr.concat(gap, rightArr);
  let lineWithGapJoined = lineWithGap.join('');

  let leftGap = new Array(leftBlock).fill(' ');
  let rightGap = new Array(rightBlock).fill(' ');

  let lineWithColorName = leftArr
    .concat(leftGap, color, rightGap, rightArr)
    .join('');
  console.log(chalk.hex(color)(lineWithGapJoined));
  console.log(chalk.hex(color)(lineWithColorName));
  console.log(chalk.hex(color)(lineWithGapJoined));
  //prints second half
  for (let i = 0; i < lowerBlockHeight; i++) {
    console.log(chalk.hex(color)(line));
  }
}

makeBlock(width, height, symbol, colorChoice);

//define function that console.logs a square of 30x10 # in a random color
// width defined via creating an new array with width
// function makeSquare(
//   width = 30,
//   height = 10,
//   symbol = '#',
//   color = colorChoice,
// ) {
//   const arrLine = new Array(width).fill(symbol);
//   const line = arrLine.join('');
//   for (let i = 0; i < height; i++) {
//     console.log(chalk.hex(color)(line));
//   }
// }

//define function that console.logs a square of 30x10 # in a random color
// // width defined via appending to a string
// function makeSquareViaString(
//   width = 30,
//   height = 10,
//   symbol = '#',

//   color = colorChoice,
// ) {
//   let line = '';
//   for (let i = 0; i < width; i++) {
//     line += symbol;
//   }
//   for (let i = 0; i < height; i++) {
//     console.log(chalk.hex(color)(line));
//   }
// }

//makeSquare(width, height, symbol, colorChoice);
//makeSquareViaString(width, height, symbol, colorChoice);
