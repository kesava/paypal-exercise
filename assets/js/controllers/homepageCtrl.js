paypalApp.controller("homepageCtrl", ['$scope',  function($scope, $location) {
	//$location.path('/homepage');
	$scope.changeView = function(action) {
		console.log(action);
		if (action == 'new') {
			$location.url('/transactions/new.html');
			$scope.$apply();
		}
		if (action == 'all') {
			$location.url('/transactions.html');
			$scope.$apply()
		}
	}
}]);