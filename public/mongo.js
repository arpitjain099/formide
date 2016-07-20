var express = require('express');
var app = express();

app.post('/api', function (req, res) {
   res.send('Hello Worlds');
})

app.get('/', function (req, res) {

	var fs = require("fs");

fs.readFile('index2.html', function (err, data) {
    if (err) return console.error(err);
    res.send(data.toString());
});
   
})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})