'use strict';

const hbs = require('handlebars');
const fs = require('fs');

module.exports.home = (event, context, callback) => {
    let template = fs.readFileSync(__dirname + '/home.hbs', 'utf8');
    template = hbs.compile(template);

    const response = {
        statusCode: 200,
        headers: {
            'Content-type': 'text/html'
        },
        body: template()
    };

    callback(null, response);
};
