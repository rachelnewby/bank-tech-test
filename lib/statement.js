class Statement {
  constructor(account) {
    this.account = account.getAccountActivity();
  }

  print() {
    if (this.account.length < 1) { return "No transactions to display" } 
    const statementArray = []
    this.account.forEach(transaction => {
      let transactionString = `${this.#dateFormatter(transaction.date)} || ${this.#amountFormatter(transaction.credit)} || ${this.#amountFormatter(transaction.debit)} || ${this.#amountFormatter(transaction.balance)}`
      statementArray.push(transactionString)
    })
    const statementOrdered = statementArray.reverse()
    statementOrdered.unshift("date || credit || debit || balance")
    return statementOrdered.join("\n")
  }

  #dateFormatter(date) {
    const day = date.getDate();
    const monthBeforeFormat = date.getMonth() + 1;
    const year = date.getFullYear();
    monthBeforeFormat < 10 ? this.month = `0${monthBeforeFormat}` : this.month = monthBeforeFormat
    return `${day}/${this.month}/${year}`
  }

  #amountFormatter(amount) {
    if (amount === "") { return amount }
    const formattedNumber = Number.parseFloat(amount).toFixed(2)
    return `${formattedNumber}`
  }
}

module.exports = Statement;