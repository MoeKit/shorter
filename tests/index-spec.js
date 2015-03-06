var expect = require('expect.js');
var shorter = require('../index');

describe('shorter', function() {

	it('should return result', function(done) {
		shorter('http://www.baidu.com', function(data) {
			expect(data.url_long).to.be('http://www.baidu.com');
			expect(data.url_short).to.be.a('string');
			done();
		}, function(data) {
			console.log('error', data);
		});
	});

	it('should return error', function() {
		shorter('//www.baidu.com', function(data) {}, function(data) {
			expect(data.error_code).to.be.a('number');
			done();
		});
	});

});