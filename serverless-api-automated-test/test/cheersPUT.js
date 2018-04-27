const cheersPUT = require('../src/cheersPUT');

const chai = require('chai');

describe('Testing of the "cheersPUT" function:', () => {
	it('should return a string, containing the request method.', (done) => {
		const result = cheersPUT();
		chai.expect(result).to.have.string('PUT');
		done();
	});
});