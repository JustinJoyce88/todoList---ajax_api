var express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api/todos', todoRoutes);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(process.env.port || 3000, function () {
  console.log("App is running");
});