class Statement {
  constructor(account) {
    this.account = account.getAccountActivity();
  }

  print() {
    console.log(this.account)
    if (this.account.length < 1) { return "No transactions to display" }
    const statementArray = ["date || credit || debit || balance"]
    this.account.forEach(transaction => {
      let transactionString = `${this.#dateFormatter(transaction.date)} || ${this.#amountFormatter(transaction.credit)} || ${this.#amountFormatter(transaction.debit)} || ${this.#amountFormatter(transaction.balance)}`
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

  #amountFormatter(amount) {
    if (amount === "") { return amount }
    const amountToString = amount.toString();
    if (amountToString.includes('.')) { 
      let indexOfDecimal = amountToString.indexOf(".")
      let decimalNumbers = amountToString.slice(indexOfDecimal)
      if (decimalNumbers.length === 3) {
        return`${amount}`
      } else if (decimalNumbers.length < 3) {
        return `${amount}0`
      } else if (decimalNumbers.length > 3) {
        const amountWithoutDecimal = amountToString.slice(0, indexOfDecimal)
        const reducedDecimalNumbers = `${decimalNumbers[1]}${decimalNumbers[2]}`
        return `${amountWithoutDecimal}.${reducedDecimalNumbers}`
      }
    }
    return `${amount}.00`
  }
}

module.exports = Statement;