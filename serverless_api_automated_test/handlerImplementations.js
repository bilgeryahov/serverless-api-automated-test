'use strict';

const cheersDELETE = require('./src/cheersDELETE');
const cheersPUT = require('./src/cheersPUT');
const helloGET = require('./src/helloGET');
const helloPOST = require('./src/helloPOST');

module.exports = {
	cheersDELETE (event, context, callback) {
		const message = cheersDELETE();
		const response = prepareResponse(message, 204);
		callback(null, response);
	},
	cheersPUT (event, context, callback) {
		const message = cheersPUT();
		const response = prepareResponse(message, 201);
		callback(null, response);
	},
	helloGET (event, context, callback) {
		const message = helloGET();
		const response = prepareResponse(message, 200);
		callback(null, response);
	},
	helloPOST (event, context, callback) {
		const message = helloPOST();
		const response = prepareResponse(message, 201);
		callback(null, response);
	}
};

function prepareResponse (message, functionStatusCode) {
	return {
		statusCode: functionStatusCode,
		headers: {
			'Access-Control-Allow-Origin' : '*',
			"Access-Control-Allow-Credentials" : true
		},
		body: JSON.stringify({
			message: message
		})
	};
}