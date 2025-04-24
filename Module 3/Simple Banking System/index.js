import BankAccount from "./bankAccount.js";

const account1 = new BankAccount(123456, Jack);
const account2 = new BankAccount(654321, Ethan, 1250);

account1.deposit(500);
account2.deposit(1000);

account1.withdraw(250);
account2.withdraw(500);

account1.checkBalance();
account2.checkBalance();