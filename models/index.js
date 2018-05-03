let mongoose = require("mongoose");

mongoose.set("debug", true);
let url = process.env.DBURL || "mongodb://localhost/todo-api";
mongoose.connect(url);
mongoose.Promise = Promise;
module.exports.Todo = require("./todo");
