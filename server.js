var builder = require('botbuilder');
var http = require('http');
var restify = require('restify');

var dotenv = require('dotenv');
dotenv.load();


var ConnectorBot = require('./connector');

var ConnectorBot = ConnectorBot.start();    