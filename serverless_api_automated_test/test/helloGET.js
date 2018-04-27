const helloGET = require('../src/helloGET');

const chai = require('chai');

describe('Testing of the "helloGET" function:', () => {
	it('should return a string, containing the request method.', (done) => {
		const result = helloGET();
		chai.expect(result).to.have.string('GET');
		done();
	});
});