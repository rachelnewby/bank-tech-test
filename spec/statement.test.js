const Statement = require('../lib/statement')

describe("Statement", () => {
  it("initially, without any account information", () => {
    let accountDouble = { getAccountActivity: () => [] }

    const statement = new Statement(accountDouble);
    expect(statement.print()).toEqual("No transactions to display")
  })

  it("#print returns string with relevant information", () => {
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

  it("#print returns string with relevant information when multiple transactions have been made", () => {
    const date = new Date();
    date.setDate(10);
    date.setMonth(0);
    const dateTwo = new Date();
    dateTwo.setDate(13);
    dateTwo.setMonth(0);
    let accountDouble = { getAccountActivity: () => [
      {
        date: date,
        credit: 1000,
        debit: "",
        balance: 1000
      }, {
        date: dateTwo,
        credit: 2000,
        debit: "",
        balance: 3000
      }
    ] }
    const statement = new Statement(accountDouble);
    expect(statement.print()).toEqual("date || credit || debit || balance\n13/01/2023 || 2000.00 ||  || 3000.00\n10/01/2023 || 1000.00 ||  || 1000.00")
  })

  it("#print returns string with relevant information when multiple transactions have been made", () => {
    const date = new Date();
    date.setDate(10);
    date.setMonth(0);
    const dateTwo = new Date();
    dateTwo.setDate(13);
    dateTwo.setMonth(0);
    const dateThree = new Date();
    dateThree.setDate(14);
    dateThree.setMonth(0);
    let accountDouble = { getAccountActivity: () => [
      {
        date: date,
        credit: 1000,
        debit: "",
        balance: 1000
      }, {
        date: dateTwo,
        credit: 2000,
        debit: "",
        balance: 3000
      }, {
        date: dateThree,
        credit: "",
        debit: 500,
        balance: 2500
      }
    ] }
    const statement = new Statement(accountDouble);
    expect(statement.print()).toEqual("date || credit || debit || balance\n14/01/2023 ||  || 500.00 || 2500.00\n13/01/2023 || 2000.00 ||  || 3000.00\n10/01/2023 || 1000.00 ||  || 1000.00")
  })
})