const Account = require("../lib/account")
const Statement = require('../lib/statement')

describe("Banking app", () => {
  beforeEach(() => {
    account = new Account;
    statement = new Statement(account);
  })

  it("initially, it prints a message to say no transactions to show", () => {
    expect(statement.print()).toEqual("No transactions to display")
  })

  it("prints a statment with the deposit", () => {
    account.deposit(100);
    expect(statement.print()).toEqual("date || credit || debit || balance\n21/02/2023 || 100.00 ||  || 100.00")
  })

  it("prints a statment with the deposit and withdrawal", () => {
    account.deposit(100);
    account.withdraw(100)
    expect(statement.print()).toEqual("date || credit || debit || balance\n21/02/2023 || 100.00 ||  || 100.00\n21/02/2023 ||  || 100.00 || 0.00")
  })

  it("prints a statment with multiple deposits and withdrawals", () => {
    account.deposit(100);
    account.withdraw(100);
    account.deposit(300);
    account.withdraw(200);
    expect(statement.print()).toEqual("date || credit || debit || balance\n21/02/2023 || 100.00 ||  || 100.00\n21/02/2023 ||  || 100.00 || 0.00\n21/02/2023 || 300.00 ||  || 300.00\n21/02/2023 ||  || 200.00 || 100.00")
  })
})