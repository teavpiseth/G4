const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const productRoute = require("./modules/products/product.route");
const employeesRoute = require("./modules/employees/employee.route");
const authenticationRoute = require("./modules/authentication/authentication.route");
const categoryRoute = require("./modules/category/category.route");
const authorization = require("./middleware/authorization");
require("dotenv").config();

app.use(cors());
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: true })); // for from data

app.use(authenticationRoute);

app.use(authorization);

app.use(productRoute);
app.use(employeesRoute);
app.use(categoryRoute);
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/send-message", (req, res) => {
  res.sendFile(path.join(__dirname, "public/send", "send-message.html"));
});

app.listen(3033, () => {
  console.log("Server is running on port 3033");
});
