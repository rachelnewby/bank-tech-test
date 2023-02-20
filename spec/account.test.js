const Account = require('../lib/account');

describe("Account", () => {

  it("when no money has been deposited or withdrawn, initially", () => {
    const account = new Account();
    expect(account.getAccountBalance()).toBe(0)
  });

  it("when no money has been deposited or withdrawn, initially activity is []", () => {
    const account = new Account();
    expect(account.getAccountActivity()).toEqual([])
  });
})