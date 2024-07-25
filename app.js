const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.render("index", {foo:"FOO"});
})


app.listen(port, function(){
    console.log("running on port " + port)
})
