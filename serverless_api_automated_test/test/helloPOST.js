const helloPOST = require('../src/helloPOST');

const chai = require('chai');

describe('Testing of the "helloPOST" function:', () => {
	it('should return a string, containing the request method.', (done) => {
		const result = helloPOST();
		chai.expect(result).to.have.string('POST');
		done();
	});
});