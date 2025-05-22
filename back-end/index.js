const sum = require("./sum");

console.log(sum(3, 5)); // Output: 8

(function () {
  const name = "Badman";
  console.log(name);
})();

(function () {
  const name = "Superman";
  console.log(name);
})();

// // server.js
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello from Node.js!");
// });

// server.listen(3001, () => {
//   console.log("Server running at http://localhost:3001");
// });
