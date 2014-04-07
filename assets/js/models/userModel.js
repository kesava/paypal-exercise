paypalApp.service("userModel", [function() {
    this.user = {
            name: "John Doe",
            balance: [{currency: "USD", value: 300}, {currency: "EUR", value: 322}],
            transactions: [{id: 1, otherparty: "janedoe@email.com", cash: {currency: "USD", value: 22}, time: 1396885680131}, {id: 2, otherparty: "johnnyive@apple.com", cash: {currency: "EUR", value: 233}, time: 1396885670138}]
        };

    this.currencyList = function() {
        return _.pluck(this.user.balance, 'currency');
    }
    
    this.processTransaction = function(transaction) {
        console.log(transaction);
        // find existing balance for the given currency. e.g. transaction = {id: 1, otherparty: "johndoe@example.com", cash: {currency: 'USD', value: 250}}
        var existingBalance = _.find(this.user.balance, function(elem) {
            return elem['currency'] == transaction.cash.currency;
        });
        console.log(existingBalance);

        if (existingBalance) {
            if (existingBalance.value >= transaction.cash.value) {
                existingBalance.value = existingBalance.value - transaction.cash.value; 
                transaction.time = new Date().getTime();

                // record the successful transaction             
                this.user.transactions.push(transaction);
                return {message: "success"};
            }
            else {
                // Not enough money left in this currency
                return {message: "Not enough balance in the account"};
            }
        }
        else { 
            // No money in this currency at all.
            // Non reachable since only those currencies with positive balances shown on the UI
        }

        console.log(this.user);

    };

    this.transactions = function() {
        return this.user['transactions'];
    }

    this.lastTransaction = function() {
        return _.last(this.user['transactions']);
    }
            
}]);