const request = require('express');
const config = require('../config.js');
const goodReadsJSONResponse = require('goodreads-json-api');
const https = require('https');

var jsonConversion = function(query, callback){ 
	var url = `https://www.goodreads.com/book/title.xml?key=${config.TOKEN}&title=${query}`;
	//if search by title fails, search will default to author
	https.get(url, (res) => {
    const options = {
        xml: {
            normalizeWhitespace: true
        }
    }
    const statusCode = res.statusCode;
    const contentType = res.headers['content-type'];
    let error;
    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
            `Status Code: ${statusCode}`);
    }
    if (error) {
        console.log(error.message);
        // consume response data to free up memory
        res.resume();
        return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
        try {
            const resp = goodReadsJSONResponse.convertToJson(rawData);
            // console.log(resp)
            callback(resp);
        } catch (e) {
            console.log(e.message);
        }
    });
	}).on('error', (e) => {
	    console.log(`Got error: ${e.message}`);
	});

}

module.exports = jsonConversion;