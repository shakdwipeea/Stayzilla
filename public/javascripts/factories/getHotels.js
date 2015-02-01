angular.module('stayzilla')
.factory('Hotels', function  ($http) {
	return {
		find: function  (Place) {
			return $http.post('/get_hotels',{
				data: {
					place: Place
				}
			});
		},

		getRecom: function  (Place) {
			return $http.get("/get_hotels_in_cities/?city='" + Place + "'");
		}
	}
});