#!/usr/bin/env node

// above is required to be able to use symlink. A symlink is created using "npm link" and then we will be able to write command "passgen"
// console.log(process.argv) //we can use this to be able to create a command such as "passgen --length=10" which should be backed by logic. Here commander package helps in achieving that.

const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");

const { createPassword } = require("./utils/createPassword");
const { savePassword } = require("./utils/savePassword");

program.version("1.0.0").description("Simple Password Generator");
// node server.js -h shows us the description now and -v the version.

// Create command
// program.command('passgen').action(() => {
//     console.log('generated')
// }).parse()

// node server.js passgen // shows generated now.

// set an option which accepts a value (set a default value if none passed). eg: node server -l 10
// --save will be a boolean with false by default
// -nn means, numbers will be true by default now
program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);
// node server.js -l 20 -ns -nn // gives us a 20 char password without numbers and symbols now

// save all generated passwords to a .txt file if user asked for it
if (save) {
  savePassword(generatedPassword);
}

// copy the password to clipboard using clipboardy
clipboardy.writeSync(generatedPassword);

// get colored output in terminal using chalk
console.log(
  chalk.yellow("Password Generated: ", chalk.bold(generatedPassword))
);

// log a message to user that the password has been copied to clipboard
console.log(chalk.red("Password copied to clipboard"));