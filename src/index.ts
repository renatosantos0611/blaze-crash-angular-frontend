var express = require("express");
var app = express();
var path = require("path");
require("dotenv").config();

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, "public"))); //  "public" off of current is root

app.listen(process.env.PORT || 4000, () => {
  console.log(`Listening... ${process.env.PORT} or 4000`);
});
