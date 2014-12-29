
app.factory('apiService', [
	'$http', '$q',
function(
	$http, $q
) {

	var apiUrl = '/api/';

	var apiService = {};

	apiService.getRecentIgPhotos = function getRecentIgPhotos(count) {
		return $q(function(resolve, reject) {
			$http.get(apiUrl + 'instagameFeed/count/' + count)
			.then(
				function success(response) {
					resolve(response.data);
				},
				function error(error) {
					reject(error);
				}
			);
		});
	};


	return apiService;
}]);
