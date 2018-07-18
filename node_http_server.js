var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs'); 

//create a server object:
http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;

    fs.readFile(__dirname + pathname, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-type':'text/plain'});
            res.write('Page not found');
            res.end();
        } else {
            res.writeHead(200);
            res.write(data);
            res.end();
        }
    });
    
}).listen(8080); //the server object listens on port 8080