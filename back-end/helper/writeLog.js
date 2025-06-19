const path = require("path");
const fs = require("fs").promises;
const logError = ({ name, message, res }) => {
  try {
    const timestamp = new Date().toISOString();
    const logFilePath = path.join(__dirname, "../", "logs", `${name}.txt`);
    fs.appendFile(logFilePath, `${timestamp} error: ${message} \n`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { logError };
