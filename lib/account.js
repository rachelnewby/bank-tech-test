class Account {
  constructor() {
    this.balance = 0
    this.accountActivity = []
  }
  
  deposit(amount) {
    this.#checkInputIsNumber(amount);
    this.#checkInputIsMonetaryValue(amount);
    this.balance += amount;
    let newDeposit = { date: new Date(), credit: amount, debit: "", balance: this.balance }
    this.accountActivity.push(newDeposit)
  }

  withdraw(amount) {
    this.#checkInputIsNumber(amount);
    this.#checkInputIsMonetaryValue(amount);
    if (amount > this.balance) throw "Insufficient funds"
    this.balance -= amount;
    let newWithdrawal = { date: new Date(), credit: "", debit: amount, balance: this.balance }
    this.accountActivity.push(newWithdrawal)
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
      let indexOfDecimal = inputAsAString.indexOf(".")
      let numberOfDecimalNumbers = inputAsAString.slice(indexOfDecimal)
      if (numberOfDecimalNumbers.length > 3) throw "Number incorrect format for monetary value"
    }
  }
}

module.exports = Account;