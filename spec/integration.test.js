const Account = require("../lib/account")
const Statement = require('../lib/statement')

describe("Banking app", () => {
  beforeEach(() => {
    account = new Account;
    statement = new Statement(account);

    let date = new Date();
    const day = date.getDate();
    const monthBeforeFormat = date.getMonth() + 1;
    const year = date.getFullYear();
    if (monthBeforeFormat < 10) {
      this.month = `0${monthBeforeFormat}`
    } else this.month = monthBeforeFormat
    this.date = `${day}/${this.month}/${year}`
  })

  it("initially, it prints a message to say no transactions to show", () => {
    expect(statement.print()).toEqual("No transactions to display")
  })

  it("prints a statment with the deposit", () => {
    account.deposit(100);
    expect(statement.print()).toEqual(`date || credit || debit || balance\n${this.date} || 100.00 ||  || 100.00`)
  })

  it("prints a statment with the deposit and withdrawal", () => {
    account.deposit(100);
    account.withdraw(100)
    expect(statement.print()).toEqual(`date || credit || debit || balance\n${this.date} || 100.00 ||  || 100.00\n${this.date} ||  || 100.00 || 0.00`)
  })

  it("prints a statment with multiple deposits and withdrawals", () => {
    account.deposit(100);
    account.withdraw(100);
    account.deposit(300);
    account.withdraw(200);
    expect(statement.print()).toEqual(`date || credit || debit || balance\n${this.date} || 100.00 ||  || 100.00\n${this.date} ||  || 100.00 || 0.00\n${this.date} || 300.00 ||  || 300.00\n${this.date} ||  || 200.00 || 100.00`)
  })

  it("throws an error if a user tries to withdraw before depositing any money", () => {
    expect(() => { account.withdraw(100)}).toThrow("Insufficient funds")
  })

  it("throws an error if a user tries to add in a value as a string to #deposit", () => {
    expect(() => { account.deposit("100") }).toThrow("Amount must be a number");
  })

  it("throws an error if a user tries to add in a value as a string to #withdraw", () => {
    expect(() => { account.withdraw("100") }).toThrow("Amount must be a number");
  })
})