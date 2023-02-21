const Statement = require('../lib/statement')

describe("Statement", () => {
  it("initially, without any account information", () => {
    let accountDouble = { getAccountActivity: () => [] }

    const statement = new Statement(accountDouble);
    expect(statement.print()).toEqual("No transactions to display")
  })

  it("initially, without any account information", () => {
    const date = new Date();
    date.setDate(10)
    date.setMonth(0)
    let accountDouble = { getAccountActivity: () => [
      {
        date: date,
        credit: 1000,
        debit: "",
        balance: 1000
      }
    ] }

    const statement = new Statement(accountDouble);
    expect(statement.print()).toEqual("date || credit || debit || balance\n10/01/2023 || 1000.00 ||  || 1000.00")
  })
})