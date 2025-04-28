class BankAccount {
    conductor (accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber,
        this.accountHolder = accountHolder,
        this.balance = balance;
    }

    deposit() {
        this.balance += amount;
        console.log("£", amount, " deposited. Current balance: ", this.balance);
    }

    withdraw() {
        if (amount > this.balance) {
            console.log("Insufficient Funds.");
        }
        else {
            this.balance -= amount;
            console.log("£", amount, " withdrawn. Current balance: ", this.balance);
        }
    }

    checkBalance() {
        console.log(this.accountHolder, ", your current balance is ", this.balance);
    }
}

export default BankAccount;