const http = require('http');
let url = require('url');
let static = require('node-static');
let file = new static.Server(".", {
    cache: 0
});

function accept(req, res) {
    if (req.url == '/vote.txt') {
        file.serve(req, res);
    } else if (req.url == '/books.json') {
        file.serve(req, res);
    } else file.serve(req, res);
}
http.createServer(accept).listen(8080);
console.log("Server running on port 8080");