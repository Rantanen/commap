
"use strict";

// Requires
var express = require('express');
var http = require('http');
var socket = require('socket');

// Require globals so they get loaded.
require('globals');

// Browserify config
var rootPath = /^.*\//.exec(__dirname)[0];
var jsbundle = require('browserify-middleware')( __dirname + '/client.js', {
    ignore: [ rootPath + 'node_modules/socket.io/lib/stores/redis.js' ]
});

// Set up the express app for hosting the web site.
var app = express();
var server = http.createServer(app);
app.get('/client.js', jsbundle);
app.use(express.cookieParser());
app.use(express.static(__dirname + '/public'));

server.listen(8080);

// Different connector interfaces:
//
// Only socketIO for now.
var WebServer = require('WebServer');
var webServer = new WebServer();
webServer.broadcast = socket.listen(server, webServer, require('WebClient').prototype);

