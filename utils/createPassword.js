// we don't need defaults in the params here because we specified them in the options itself btw

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%ˆ&*_+-=";

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = alpha;
  hasNumbers ? (chars += numbers) : "";
  hasSymbols ? (chars += symbols) : "";

  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length)); // gives us character at any position within that chars string
  }

  return password;
};

module.exports = { createPassword };
