class Account {
  constructor() {
    this.balance = 0
    this.accountActivity = []
  }
  
  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  getAccountBalance() {
    return this.balance;
  }

  getAccountActivity() {
    return this.accountActivity;
  }
}

module.exports = Account;