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
    this.#checkInputIsMonetaryValue(amount);
    this.#checkInputIsNumber(amount);
    if (amount > this.balance) throw "Insufficient funds"
    this.balance -= amount;
  }

  getAccountBalance() {
    return this.balance;
  }

  getAccountActivity() {
    return this.accountActivity;
  }

  #checkInputIsNumber(input) {
    if (typeof input !== 'number') throw "Amount must be a number"
  }

  #checkInputIsMonetaryValue(input) {
    const inputAsAString = input.toString()
    if (inputAsAString.includes('.')) {
      let indexOfDecimal = inputAsAString.indexOf()
      let numberOfDecimalNumbers = inputAsAString.slice(indexOfDecimal)
      if (numberOfDecimalNumbers > 2) throw "Number incorrect format for monetary value"
    }
  }
}

module.exports = Account;