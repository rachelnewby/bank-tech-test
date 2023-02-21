const Account = require("../lib/account")
const Statement = require('../lib/statement')

describe("Banking app", () => {
  it("initially, it prints a message to say no transactions to show", () => {
    const account = new Account;
    const statement = new Statement(account);
    expect(statement.print()).toEqual("No transactions to display")
  })

  it("prints a statment with the deposit", () => {
    const account = new Account;
    const statement = new Statement(account);
    account.deposit(100);
    expect(statement.print()).toEqual("date || credit || debit || balance\n21/02/2023 || 100.00 ||  || 100.00")
  })
})