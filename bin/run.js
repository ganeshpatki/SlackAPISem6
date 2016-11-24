'use strict'

const slackClient = require("../server/slackClient");
const service = require("../server/service");
const http = require("http");

const server = http.createServer(service);
server.listen(3000);

const slackToken = 'xoxb-106871034272-2gQiAehTKP8Tf3m8UAjmhW1s';
const slackLogLevel = 'verbose';

const rtm = slackClient.init(slackToken, slackLogLevel);
rtm.start();

slackClient.addAuthenticatedHandler(rtm, () => server.listen(3000));

server.on('listening', function(){
    console.log(`Slack is listening on ${server.address().port} in ${service.get('env')} mode`);

});
