const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const PORT = process.env.PORT || 8080;

app.get("/test", (req, res) => {
  res.send("Test node app");
});

app.listen(PORT, (req, res) => {
  console.log("server connected");
});
