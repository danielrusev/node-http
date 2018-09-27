
var http = require('http');
var fileSystem = require('fs');

const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://92e081050080418a8a6124df5e10435e@sentry.io/1289615' });

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
		}
	});
});

server.listen(8080);


