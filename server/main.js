/*eslint-disable*/
var express = require("express");
var multer = require("multer");
var fs = require("fs");
var app = express();

var DIR = "./uploads/";

var upload = multer({ dest: DIR });

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(
  multer({
    dest: DIR,
    rename: function (fieldname, filename) {
      return filename + Date.now();
    },
    onFileUploadStart: function (file) {
      console.log(file.originalname + " is starting ...");
    },
    onFileUploadComplete: function (file) {
      console.log(file.fieldname + " uploaded to  " + file.path);
    },
  }).any()
);

app.get("/api", function (req, res) {
  res.end("file catcher example");
});

app.post("/api", function (req, res) {

  res.end("https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Temp_plate.svg/1280px-Temp_plate.svg.png")
  // upload(req, res, function (err) {
  //   if (err) {
  //     return res.end(err.toString());
  //   }

  //   res.end("File is uploaded");
  // });
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("Working on port " + PORT);
});
