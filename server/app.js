/**
 * Created by aaronsawyer on 5/5/15.
 */
var express = require('express');

var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

var index = require('./routes/index');

app.use("/", index);

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("listening on port: ", port);
});

module.exports = app;
