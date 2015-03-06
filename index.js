var jsonp = require('jsonp');
module.exports = function(url, successCallback, errorCallback) {
	jsonp('http://api.weibo.com/2/short_url/shorten.json?source=5786724301&url_long=' + url, function(data) {
		if (data.data.error_code) {
			errorCallback && errorCallback(data.data);
		} else {
			successCallback(data.data.urls[0]);
		}
	});
};