/*
 * node app.js
 */
 var finalhandler = require('finalhandler')
 var http = require('http')
 var serveStatic = require('serve-static')
 var port = process.argv[2] || 3000;

 // Serve up public/ftp folder
 var serve = serveStatic('public/html', {'index': ['index.html', 'index.htm']})

 // Create server
 var server = http.createServer(function onRequest (req, res) {
   serve(req, res, finalhandler(req, res))
 })

 // Listen
 server.listen(port);

 console.log('Static web server running on port '+port+'...');
