const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");

/*
1. Have append functionality
2. Line breaks after adding password
*/

const savePassword = (password) => {
  let dir = "./data";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  // can set file permissions after 'a' as well such as 666 for text files, which allow to only write to this file and no read
  fs.open(
    path.join(__dirname, "../", dir, "passwords.txt"),
    "a",
    (event, id) => {
      fs.write(id, password + os.EOL, null, "utf-8", () => {
        fs.close(id, () => {
          console.log(chalk.green("Password saved to passwords.txt"));
        });
      });
    }
  );
};

module.exports = { savePassword };
