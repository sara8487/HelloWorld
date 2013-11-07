var = http require ('http');
var server = http.createserver ();
function handlerequest (req,res) {
res.writeHead (200, {'content-type': 'text/plain'});
res.write ('Hello World!');
res.end ();
}
server.on('request'), handleRequest);

server.listen (8080);

