'use strict'

const RtmClient = require('@slack/client').RtmClient;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;

function handleOnAuthenticated(rtmStartData){
    console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, But not yet connected to a channel`)

}

function addAuthenticatedHandler(rtm, handler){
    rtm.on(CLIENT_EVENTS.RTM.AUTEHENTICATED, handler);

}
module.exports.init = function slackbot(token, logLevel){

    const rtm = new RtmClient(token, logLevel);
    addAuthenticatedHandler(rtm, handleOnAuthenticated);
    return rtm;

}

module.exports.addAuthenticatedHandler = addAuthenticatedHandler;