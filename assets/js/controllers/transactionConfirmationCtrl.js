paypalApp.controller("transactionConfirmationCtrl", ['$scope', 'userModel', function($scope, userModel) {
    var lastTransaction = userModel.lastTransaction();
    $scope.confirmation_message = "Sent " + lastTransaction['cash']['currency'] + " " + lastTransaction['cash']['value'] + " to " + lastTransaction['otherparty'] + ".";
}]);