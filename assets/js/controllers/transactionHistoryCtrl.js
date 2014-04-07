paypalApp.controller("transactionHistoryCtrl", ['$scope', 'userModel', function($scope, userModel) {
    $scope.transactions = userModel.transactions();

     $scope.printDate = function(t) {
      var d = new Date(t);
      return d.toLocaleDateString("en-US");
    }
}]);