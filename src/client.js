/*global $ */

"use strict";

require('globals');
var WebServer = require('WebServer');
var WebClient = require('WebClient');
var socket = require('socket');
var client;

$(function () {
    client = new WebClient();
    socket.connect(null, client, WebServer.prototype);
});
