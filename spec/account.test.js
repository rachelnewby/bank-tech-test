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
})