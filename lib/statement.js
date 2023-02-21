class Statement {
  constructor(account) {
    this.account = account.getAccountActivity();
  }

  print() {
    if (this.account.length < 1) { return "No transactions to display" }
    const statementArray = ["date || credit || debit || balance"]
    this.account.forEach(transaction => {
      let transactionString = `${this.#dateFormatter(transaction.date)} || ${transaction.credit}.00 || ${transaction.debit} || ${transaction.balance}.00`
      statementArray.push(transactionString)
    })
    return statementArray.join("\n")
  }

  #dateFormatter(date) {
    const day = date.getDate();
    const monthBeforeFormat = date.getMonth() + 1;
    const year = date.getFullYear();
    if (monthBeforeFormat < 10) {
      this.month = `0${monthBeforeFormat}`
    } else this.month = monthBeforeFormat
    return `${day}/${this.month}/${year}`
  }


}

module.exports = Statement;