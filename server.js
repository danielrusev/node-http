
var http = require('http');
var fileSystem = require('fs');

var Raven = require('raven');
Raven.config('http://cfbb97d606394c82a7fd4b040970db5a@35.228.87.41:9000/3').install();


// See SDK documentation for language specific usage.
Raven.config('http://cfbb97d606394c82a7fd4b040970db5a@35.228.87.41:9000/3', {
	release: '0e4fdef81448dcfa0e16ecc4433ff3997aa53572'
  }).install();
  

var server = http.createServer(function(req, resp){
	fileSystem.readFile('./index.html', function(error, fileContent){
		if(error){
			resp.writeHead(500, {'Content-Type': 'text/plain'});
			resp.end('Error');
		}
		else{
			resp.writeHead(200, {'Content-Type': 'text/html'});
			resp.write(fileContent);
			resp.end();
			Raven.captureException("exception from node server");
		}
	});
});

server.listen(8080);


