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

module.exports.webhook = (event, context, callback) => {
    let body = JSON.parse(event.body);
    body.events.forEach((event) => {
        // ignore events from our public channel -- it's only for broadcasting
        if (event.channel === updatesChannel) {
            return;
        }
        visitorCount += event.name === 'channel_occupied' ? 1 : -1;
    });

    // notify all clients of new figure
    const pusher = new Pusher({
        appId: process.env.PUSHER_APP_ID,
        key: process.env.PUSHER_APP_KEY,
        secret: process.env.PUSHER_APP_SECRET,
        cluster: process.env.PUSHER_APP_CLUSTER,
    });
    pusher.trigger(updatesChannel, 'update', {newCount: visitorCount});

    // tell Pusher everything went well
    callback(null, { statusCode: 200 });
};
