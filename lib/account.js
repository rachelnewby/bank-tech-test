class Account {
  constructor() {
    this.balance = 0
    this.accountActivity = []
  }
  
  deposit(amount) {
    this.#checkInputIsNumber(amount);
    this.balance += amount;
  }

  withdraw(amount) {
    const amountAsAString = amount.toString()
    if (amountAsAString.includes('.')) {
      let indexOfDecimal = amountAsAString.indexOf()
      let numberOfDecimalNumbers = amountAsAString.slice(indexOfDecimal)
      if (numberOfDecimalNumbers > 2) {
        throw "Number incorrect format for monetary value"
      }
    }
    this.#checkInputIsNumber(amount);
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

  #checkInputIsNumber(input) {
    if (typeof input !== 'number') {
      throw "Amount must be a number"
    }
  }
}

module.exports = Account;