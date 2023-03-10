const Account = require('../lib/account');

describe("Account", () => {
  beforeEach(() => {
    account = new Account;
  });
  
  it("when no money has been deposited or withdrawn, initially activity is []", () => {
    expect(account.getAccountActivity()).toEqual([])
  });

  it("when money is deposited, it stores the balance", () => {
    account.deposit(300.00);
    let resultSet = account.getAccountActivity();
    expect(resultSet[0].balance).toEqual(300);
  });

  it("when money is deposited, then withdrawn, the correct balance is returned", () => {
    account.deposit(300);
    account.withdraw(100);
    let resultSet = account.getAccountActivity();
    expect(resultSet[1].balance).toEqual(200);
  });

  it("when multiple deposits are made, the correct balance is returned", () => {
    account.deposit(300);
    account.deposit(100);
    let resultSet = account.getAccountActivity();
    expect(resultSet[1].balance).toEqual(400);
  });

  it("when multiple deposits and withdrawls are made, the correct balance is returned", () => {
    account.deposit(300);
    account.withdraw(100);
    account.deposit(300);
    let resultSet = account.getAccountActivity();
    expect(resultSet[2].balance).toBe(500);
  });

  it("#withdraw fails when a withdrawl is made when there are no funds", () => {
    expect(() => { account.withdraw(100) }).toThrow("Insufficient funds");
  })

  it("#deposit fails if a string is passed as an argument", () => {
    expect(() => { account.deposit("100") }).toThrow("Amount must be a number");
  })

  it("#deposit fails if an array is passed as an argument", () => {
    expect(() => { account.deposit([]) }).toThrow("Amount must be a number");
  })

  it("#withdraw fails if a string is passed as an argument", () => {
    expect(() => { account.withdraw("100") }).toThrow("Amount must be a number");
  })

  it("#withdraw fails if an array is passed as an argument", () => {
    expect(() => { account.withdraw([]) }).toThrow("Amount must be a number");
  })

  it("#withdraw fails if a number with more than two decimal places is passed as argument", () => {
    account.deposit(300)
    expect(() => { account.withdraw(200.893) }).toThrow("Number incorrect format for monetary value");
  })

  it("#deposit fails if a number with more than two decimal places is passed as argument", () => {
    expect(() => { account.deposit(200.893) }).toThrow("Number incorrect format for monetary value");
  })

  it("#deposit allows user to input values with 2 decimal places", () => {
    account.deposit(100.90)
    let resultSet = account.getAccountActivity();
    expect(resultSet[0].balance).toBe(100.9)
  })

  it("#getAccountActivity returns array of objects", () => {
    account.deposit(300.00)
    expect(account.getAccountActivity()).toEqual(
      expect.arrayContaining([expect.objectContaining({credit: 300})])
    )
  });

  it("#getAccountActivity returns array of objects", () => {
    account.deposit(300.00)
    account.withdraw(100)
    expect(account.getAccountActivity()).toEqual(
      expect.arrayContaining([expect.objectContaining({debit: 100, balance: 200})])
    )
  });
})