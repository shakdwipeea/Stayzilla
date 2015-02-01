module.exports = function  (app) {
	app.post('/get_hotels', function  (req,res) {

		var request = require('request');
		var events = require('events');
		var EventEmitter = new events.EventEmitter();

		var dataHotels = {};

		//console.log(req.body.data.place);
		var obj = {
				location: req.body.data.place,
				property_type: 'Hotels',
				checkin: '07/03/2015',
				checkout: '08/03/2015'
			};
		

		request.post('http://180.92.168.7/hotels',{
			form: obj 
		}, function  (err,response,body) {
				dataHotels = body;
				EventEmitter.emit('got');
			});

		EventEmitter.on('got', function  () {
			//res.end(dataHotels);
			var data = JSON.parse(dataHotels);
			var hotels = data.hotels;


			var hotelNames = [];

			for (var i = 0; i < hotels.length; i++) {
				//console.log(hotels[i].displayName);
				hotelNames.push(hotels[i].displayName);
			};

			//res.end(hotelNames.toString());
			res.end(JSON.stringify(hotels));
		});


	});
}