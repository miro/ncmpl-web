
app.controller('landingController', [
	'$scope', 'apiService',
function(
	$scope, apiService
) {

	// Storages
	$scope.igImages = [];

	$scope.init = function initialize() {
		var scope = $scope;

		apiService.getRecentIgPhotos(12)
		.then(
			function success(data) {
				scope.igImages = data.images;
			}
		);
	};

}]);
