angular.module('stayzilla')
.controller('HomeController', function ($scope,Hotels) {
	// body...
	$scope.ini = true;
	var hotels = [];
	$scope.loading = false;
	$scope.loading2 = false;
	var recom = {};

	var data = [];

	var count = 0;

	console.log("loading",$scope.loading);
	
	$scope.search = function() {
		$scope.ini = false;
		$scope.loading = true;
		$scope.loading2 = false;
		$scope.hotelDetail = {};
		$scope.hotels = [];
		 recom = {};
		 $scope.selected = 0;

	 data = [];

	 count = 0;
	 hotels = [];	
		
		//loadingAnimate();

		Hotels.find($scope.place)
		.success( function  (payload) {
			$scope.loading = false;
			console.log(payload);
			data = payload;
			//payload = payload.split(',');
			//hotels = payload;
			_.map(payload, function  (hotel) {
				hotels.push({
					name: hotel.displayName
				});
			})
			displayList();
		})
		.error( function  (reason) {
			console.log(reason);
		})

		Hotels.getRecom($scope.place)
		.success(function  (payload) {
			
			console.log(payload);
			recom = payload;
			displayList();
		})
		.error(function  (reason) {
			console.log(reason);
		})
	}

	function displayList () {
		count++;
		if (count === 2) {
			recom = _.pairs(recom);
			console.log(recom);
			for (var i = 0; i < hotels.length; i++) {
				
				for (var j = 0; j < recom.length; j++) {
					if (compare(hotels[i].name, recom[j][0])) {
						console.log("Here",recom[j][1]);
						console.log("i is",i);
						hotels[i].frequency = recom[j][1];
						break;
					}
					else {
						hotels[i].frequency = 0;
					}
				}

			};	

			var max = _.max(hotels, function  (hotel) {
				return hotel.frequency;
			});

			console.log("Max",max);

			for (var i = 0; i < hotels.length; i++) {
				hotels[i].popularity = hotels[i].frequency / max.frequency * 100;
			};

			$scope.hotels = hotels;
				console.log(hotels);
		};
	}

	function compare (str1, str2) {
		return str1 === str2;
	}

	$scope.selected = 0;

	$scope.displayHotel = function  (hotelName,$index) {
		//console.log(data,hotelName);
		$scope.selected = $index;
		var hotel = _.find(data, function  (hotel) {
			return hotel.displayName === hotelName;
		})

		console.log(hotel);
		$scope.loading2 = true;
		$scope.hotelDetail = hotel;
	}

});