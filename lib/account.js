class Account {
  constructor() {
    this.balance = 0
    this.accountActivity = []
  }

  getAccountBalance() {
    return this.balance;
  }

  getAccountActivity() {
    return this.accountActivity
  }
}

module.exports = Account;