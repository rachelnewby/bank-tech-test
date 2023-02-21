class Account {
  constructor() {
    this.balance = 0
    this.accountActivity = []
  }
  
  deposit(amount) {
    if (typeof amount !== 'number') {
      throw "Amount must be a number"
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw "Insufficient funds"
    }
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