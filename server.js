var http = require("http");

var PORT = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
    response.end("it works, path hit:" + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

    console.log("server listening on http://localhost:" + PORT);
})

server.listen(PORT2, function() {
    console.log("server listening on http://localhost:" + PORT2);
})
