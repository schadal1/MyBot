
const builder = require('botbuilder');

const https = require('https');
const querystring = require('querystring');
const prompts = require('./prompts.js');


const dialog = new builder.IntentDialog();
//Root Dialog
const options = [
    'Upload Data',
    'Paste Data',
];

module.exports = dialog
    .matches(/^upload/i, uploadFunction)
    .matches(/^paste/i, pasteFunction)
    .onDefault([sendInstructions]);

function sendInstructions(session, results, next) {
    builder.Prompts.choice(session, 'What do you wanna do?', options);
    next();
}

function uploadFunction(session, results, next){
    builder.Prompts.text(session, 'Please upload text file!');
    //builder.Prompts.attachment();
}

function pasteFunction(session, results, next){
    builder.Prompts.text(session,'Please paste the text!');

}
