const Account = require('../lib/account');

describe("Account", () => {
  beforeEach(() => {
    account = new Account;
  });

  it("when no money has been deposited or withdrawn, initially", () => {
    expect(account.getAccountBalance()).toBe(0)
  });

  it("when no money has been deposited or withdrawn, initially activity is []", () => {
    expect(account.getAccountActivity()).toEqual([])
  });

  it("when money is deposited, it stores the balance", () => {
    account.deposit(300.00);
    expect(account.getAccountBalance()).toBe(300);
  });

  it("when money is deposited, then withdrawn, the correct balance is returned", () => {
    account.deposit(300);
    account.withdraw(100);
    expect(account.getAccountBalance()).toBe(200);
  });

  it("when multiple deposits are made, the correct balance is returned", () => {
    account.deposit(300);
    account.deposit(100);
    expect(account.getAccountBalance()).toBe(400);
  });

  it("when multiple deposits and withdrawls are made, the correct balance is returned", () => {
    account.deposit(300);
    account.withdraw(100);
    account.deposit(300);
    expect(account.getAccountBalance()).toBe(500);
  });

  it("#withdraw fails when a withdrawl is made when there are no funds", () => {
    expect(() => { account.withdraw(100) }).toThrow("Insufficient funds");
  })

  it("#deposit fails if a string is passed as an argument", () => {
    expect(() => { account.deposit("100") }).toThrow("Amount must be a number");
  })

  it("#withdraw fails if a string is passed as an argument", () => {
    expect(() => { account.withdraw("100") }).toThrow("Amount must be a number");
  })

})