const Statement = require('../lib/statement')

describe("Statement", () => {
  it("initially, without any account information", () => {
    let accountDouble = { getAccountActivity: () => [] }

    const statement = new Statement(accountDouble);
    expect(statement.print()).toEqual("No transactions to display")
  })
})