module.exports = function  (app) {
	app.get('/get_hotels_in_cities', function  (req,res) {
		var request = require('request');

		var city = req.query.city;
		console.log(city);

		request("http://walker.servequake.com:3000/stayz/?city=" + city, function  (err,respo,body) {
			console.log(body);
			var data = JSON.parse(body);
			res.end(JSON.stringify(data.dict));
		});
	});
}