var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if (filename == './') {filename = './index';}

    filename = filename + ".html";


    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'}); //header
        res.write(data);
        return res.end();
    });
}).listen(8080);    

console.log("Server listening on port 8080");
