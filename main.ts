#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.yellowBright.underline`\n Wellcome my Number Guessing Game :- 😊\n`
);



const randomNumber = Math.floor(Math.random() * 6 + 1);
let exit = false;

while (!exit) {const answers = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: chalk.bold("Please guess a number between 1-6 :  "),
  },
]);

if (answers.userGuessNumber === randomNumber) {
  console.log(chalk.green(`Congratulation! you guessed a right number.  hurrah!🥳💝`));
} else {
  console.log(
    chalk.red`You guessed wrong number! 😔 Please try again `
  );
}
}