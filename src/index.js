const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/ping", (req, res) => {
  res.send("pong");
});
app.listen(8888, () => {
  console.log("Serverul rulează pe http://localhost:8888");
});