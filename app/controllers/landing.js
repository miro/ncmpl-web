
app.controller('landingController', [
	'$scope', 'apiService',
function(
	$scope, apiService
) {

	// Storages
	$scope.igImages = {
		firstHalf: [],
		secondHalf: []
	};

	$scope.init = function initialize() {
		var scope = $scope;

		apiService.getRecentIgPhotos(12)
		.then(
			function success(data) {
				scope.igImages.firstHalf = data.images.slice(0,6);
				scope.igImages.secondHalf = data.images.slice(6,12);
			}
		);
	};

}]);
