const Account = require("../lib/account")
const Statement = require('../lib/statement')

describe("Banking app", () => {
  it("initially, it prints a message to say no transactions to show", () => {
    const account = new Account;
    const statement = new Statement(account);
    expect(statement.print()).toEqual("No transactions to display")
  })
})