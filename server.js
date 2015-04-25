var express      	   = require('express'),
    http    	 	   = require('http'),
    app     	 	   = express(),
    server  	 	   = http.createServer(app),
    port    	 	   = process.env.PORT || 3000;

server.listen(port);

app.get('/', function(req, res) { res.sendFile(__dirname + '/index.html'); });
app.use("/public", express.static(__dirname + '/public'));

console.log("Server running on port: " + port);