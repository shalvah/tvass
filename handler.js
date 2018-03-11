'use strict';

const hbs = require('handlebars');
const fs = require('fs');
const Pusher = require('pusher');

let visitorCount = 0;
const updatesChannel = 'visitor-updates';

module.exports.home = (event, context, callback) => {
    let template = fs.readFileSync(__dirname + '/home.hbs', 'utf8');
    template = hbs.compile(template);

    const response = {
        statusCode: 200,
        headers: {
            'Content-type': 'text/html'
        },
        body: template({
            visitorCount,
            appKey: process.env.PUSHER_APP_KEY,
            appCluster: process.env.PUSHER_APP_CLUSTER,
            updatesChannel
        })
    };

    callback(null, response);
};
