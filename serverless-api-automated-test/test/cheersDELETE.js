const cheersDELETE = require('../src/cheersDELETE');

const chai = require('chai');

describe('Testing of the "cheersDELETE" function:', () => {
	it('should return a string, containing the request method.', (done) => {
		const result = cheersDELETE();
		chai.expect(result).to.have.string('DELETE');
		done();
	});
});