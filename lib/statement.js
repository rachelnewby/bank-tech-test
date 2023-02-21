class Statement {
  constructor(account) {
    this.account = account.getAccountActivity();
  }

  print() {
    if (this.account.length < 1) {
      return "No transactions to display"
    }
  }
}

module.exports = Statement;