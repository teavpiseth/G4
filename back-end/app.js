const express = require("express");
const app = express();

app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: true })); // for from data

app.use((req, res, next) => {
  req.part_url = req.url.split("?")[0];
  next();
});

app.use((req, res, next) => {
  req.part_url = req.url.split("?")[0];
  //   res.json({
  //     message: "request fail",
  //     status: 200,
  //     data: ["test"],
  //   });
  next();
});

app.get("/", (req, res) => {
  res.send("Hello node js");
});

app.get("/user/:id", (req, res) => {
  console.log(req.part_url, "part url");
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

app.post("/submit", (req, res) => {
  const message = req.body.message;
  console.log("Received message:", message);
  res.json({
    message: "Message received successfully",
    status: 200,
    data: ["test"],
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route Not found" });
});

app.listen(3033, () => {
  console.log("Server is running on port 3033");
});
