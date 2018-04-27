'use strict';

const handlerImplementations = require('./handlerImplementations');

module.exports.hello = (event, context, callback) => {
	if (event.httpMethod === 'GET') {
		return handlerImplementations.helloGET(event, context, callback);
	} else if (event.httpMehod === 'POST') {
		return handlerImplementations.helloPOST(event, context, callback);
	}
};

module.exports.cheers = (event, context, callback) => {
	if (event.httpMethod === 'PUT') {
		return handlerImplementations.cheersPUT(event, context, callback);
	} else if (event.httpMehod === 'DELETE') {
		return handlerImplementations.cheersDELETE(event, context, callback);
	}
};