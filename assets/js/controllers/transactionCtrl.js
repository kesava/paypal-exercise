paypalApp.controller("transactionCtrl", ['$scope', 'userModel', '$location', function($scope, userModel, $location) {

    var johndoe = {
            name: "John Adams",
            email: "no2@whitehouse.gov"
        },
        twain = {
            name: "Mark Twain",
            email: "mark@twain.com"
        },
        fey = {
            name: "Tina Fey",
            email: "fey@nbc.com"
        },
        neil = {
            name: "Neil Armstrong",
            email: "neil.armstrong@nasa.gov"
        };
    
    $scope.partyList = [johndoe, twain, fey, neil];
    //$scope.currencyList = ["USD", "EUR", "GBP", "JPY", "AUD", "CHF", "HKD", "CAD", "ZAR", "INR" ];

    $scope.userModel = userModel;

    // Get only those currencies for which the user has a positive balance.
    $scope.currencyList = $scope.userModel.currencyList(); 


    // Process transaction
    $scope.transact = function() {
        if ((typeof $scope.transactionModel === 'undefined') || (typeof $scope.transactionModel.currency === 'undefined') || (typeof $scope.transactionModel.value === 'undefined') ) {
            $scope.transactionModel.error = "Currency or amount cannot be blank"
            return;
        }

        if ((typeof $scope.transactionModel.email === 'undefined') && (typeof $scope.transactionModel.party === 'undefined')) {
            $scope.transactionModel.error = "Recepient cannot be blank"
            return;
        }
        var partyemail = $scope.transactionModel.email || $scope.transactionModel.party.email;
        console.log(partyemail);
        var result = $scope.userModel.processTransaction({id: 1, cash: {currency: $scope.transactionModel.currency, value: $scope.transactionModel.value}, otherparty: partyemail});
        if (result.message == "success") {
            console.log("success");
            $location.path('/transaction_confirmation');
            $scope.apply();
        } 
        else {
            $scope.transactionModel.error = result.message;
        }
    };

    $scope.reset = function() {
            $scope.transactionModel = angular.copy($scope.master);
    }
    
}]);