// import all necessary modules form node or locally
const chalk = require('chalk');
const readline = require('readline-sync');
const randomcolor = require('randomcolor');

//initialize a random hex color variable and print it out
let colorChoice = randomcolor();
let symbol = '#';

// get the user input from the process.argv if supplied//const Args = process.argv[2].split('x');
// creates an array from third argument onwards
const Args = process.argv.slice(2);

//initialize height and width
let minHeight = 5;
let minWidth = 19;
let height;
let width;
let measures;

if (/\d*x\d*/.test(Args[0]) === true) {
  // test if first argument matches Regex (digtsxdigits)
  measures = process.argv[2].split('x'); //generate array from string
  height = parseInt(measures[0]);
  width = parseInt(measures[1]);
  if (height < minHeight) {
    height = minHeight;
    console.log(`Too small, I set the height to ${minHeight}.`);
  }
  if (width < minWidth) {
    width = minWidth;
    console.log(`Too small, I set the height to ${minWidth}.`);
  }
}

//initialize color choices
let hueChoice = '';
let luminosityChoice = '';
//if the first argument is ask, ask for input:
if (Args[0] === 'ask') {
  hueChoice = readline.question('Enter a color: ');
  luminosityChoice = readline.question('Enter a hue (light/dark): ');
} else {
  hueChoice = Args[0]; //saves hue choice, first user supplied argument
  luminosityChoice = Args[1];
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

//define function that console.logs a square of 30x10 # in a random color
// width defined via creating an new array with width
function makeSquare(
  width = 30,
  height = 10,
  symbol = '#',
  color = colorChoice,
) {
  const arrLine = new Array(width).fill(symbol);
  const line = arrLine.join('');
  for (let i = 0; i < height; i++) {
    console.log(chalk.hex(color)(line));
  }
}

//define function that console.logs a square of 30x10 # in a random color
// width defined via appending to a string
function makeSquareViaString(
  width = 30,
  height = 10,
  symbol = '#',

  color = colorChoice,
) {
  let line = '';
  for (let i = 0; i < width; i++) {
    line += symbol;
  }
  for (let i = 0; i < height; i++) {
    console.log(chalk.hex(color)(line));
  }
}

function makeBloc(width = 30, height = 10, symbol = '#', color = '#ffffff') {
  const blocHeight = Math.floor((height - 3) / 2);
  const blocHeight1 = blocHeight;
  let blocHeight2 = blocHeight;
  if (height % 2 === 0) {
    blocHeight2 += 1;
  }
  const arrLine = new Array(width).fill(symbol);
  const line = arrLine.join('');
  //prints first half
  for (let i = 0; i < blocHeight1; i++) {
    console.log(chalk.hex(color)(line));
  }

  //prints 'label'
  const margin = 5;
  let padding1 = Math.floor((width - margin * 2 - 7) / 2);
  let padding2 = padding1;
  if (width % 2 === 0) {
    padding2 += 1;
  }

  const leftArr = new Array(margin).fill(symbol);
  const rightArr = new Array(margin).fill(symbol);
  const gap = new Array(width - margin * 2).fill(' ');
  let lineWithGap = leftArr.concat(gap, rightArr);
  let lineWithGap2 = lineWithGap.join('');

  let smallGap1 = new Array(padding1).fill(' ');
  let smallGap2 = new Array(padding2).fill(' ');

  let lineWithColor = leftArr
    .concat(smallGap1, color, smallGap2, rightArr)
    .join('');
  console.log(chalk.hex(color)(lineWithGap2));
  console.log(chalk.hex(color)(lineWithColor));
  console.log(chalk.hex(color)(lineWithGap2));
  //prints second half
  for (let i = 0; i < blocHeight2; i++) {
    console.log(chalk.hex(color)(line));
  }
}

makeBloc(width, height, symbol, colorChoice);
//makeSquare(width, height, symbol, colorChoice);
//makeSquareViaString(width, height, symbol, colorChoice);
