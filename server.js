var express     = require('express'),
    http        = require('http'),
    app         = express(),
    pythonshell = require('python-shell'),
    server      = http.createServer(app),
    port        = process.env.PORT || 3000;

var options = {
  mode: 'text',
  scriptPath: './public',
  args: ['age', '10', 'gender', '1', 'ticket_class', '3']
};

var pyshell = new pythonshell('decision.py', options);

pyshell.on('message', function (message) { 
// received a message sent from the Python script (a simple "print" statement)  
console.log(message); });

server.listen(port);

app.get('/', function(req, res) { res.sendFile(__dirname + '/index.html'); });
app.get('/result.html', function(req, res) { res.sendFile(__dirname + '/result.html'); });
app.use("/public", express.static(__dirname + '/public'));

console.log("Server running on port: " + port);