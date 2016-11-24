'use strict'

const RtmClient = require('@slack/client').RtmClient;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;

let rtm = null;


function handleOnAuthenticated(rtmStartData){
    console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, But not yet connected to a channel`)

}

function handleOnMessage(message){
    console.log(message);
    rtm.sendMessage('this is a test message', message.channel, function messagesent() {
        // callback whne message is sent
    });
}


function addAuthenticatedHandler(rtm, handler){
    rtm.on(CLIENT_EVENTS.RTM.AUTEHENTICATED, handler);

}
module.exports.init = function slackbot(token, logLevel){

    rtm = new RtmClient(token, logLevel);
    addAuthenticatedHandler(rtm, handleOnAuthenticated);
    rtm.on(RTM_EVENTS.MESSAGE, handleOnMessage);
    return rtm;

}

module.exports.addAuthenticatedHandler = addAuthenticatedHandler;