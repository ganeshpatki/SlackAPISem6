'use strict'

const request = require('superagent');

function handleWitResponse(res){
    return res.entities;
}

module.exports = function witClient(token){
    const ask = function ask(messaage, cb){
        request.get('https://api.wit.ai/messaage')
        .set('Authorization', 'Bearer' + token)
        .query({v: '20161123'})
        .query({q: messaage})
        .end((err, res) => {
            if(err) return cb(err);

            if(res.statusCode != 200) return cb('Expect status 200 but got' + res.statusCode);

            const witResponse = handleWitResponse(res.body);
            })
    }


    return{
        ask: ask
    }
    
}
