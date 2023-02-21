# Bank Tech Test Multi-Class Planned Design Recipe

## 1. Describe the Problem

As a user,
So that I can put money into in my bank account, 
I want to be able to make deposits.

As a user, 
So that I can take money out of my bank account,
I want to be able to make withdrawls.

As a user, 
So that I can see how much money I have in my bank account, 
I want to be able to print an account statement.

As a user, 
So that I can track my financial activity, 
I want my statement to display dates, amounts, and balance.

## 2. Design the Class System

```
┌───────────────────┐ Statement class ┌────────────────────┐
│       Account     │  depends on     │     Statement      │
│        class      │  account        │      class         │
│ withdraw          │  instance       │ prints formatted   │
│ deposit           ├────────────────►│ statement          │
│ accountActivity   │                 │                    │
│                   │                 │                    │
└───────────────────┘                 └────────────────────┘
```

```js

class Account {
  constructor() { // Doesn't take any arguments when initialized
    this.accountActivity = [] // Will store the activity as an array of hashes 
    this.balance = 0 // Will update depending on activity. Will start as 0
  }

  withdraw(amount) // Will take an amount in as an argument - number will be a float (to 2 decimal points). If a round number given, '.00' will be apended
  // Activity will be added to this.accountActivity array
  // Returns nothing 

  deposit(amount) // Will take an amount in as an argument - number will be a float (to 2 decimal points). If a round number given, '.00' will be apended
  // Activity will be added to this.accountActivity array
  // Returns nothing 

  getAccountActivity() // Won't take any arugments
  // Returns this.accountActivity 

  getAccountBalance() // Won't take any arguments
  // Returns this.balance

}

class Statement {
  constructor(account) { // Takes an instance of Account as an argument
    this.accountActivity // will get the account activity from the account instance via the getAccountActivity function
    this.currentBalance // will get the current balance of the account via the getAccountBalance function
  }

  print() // Won't take an argument
  // Will print the statement (of the accountActivity) using a private function

  #amountFormatter(amount) // Will take a number as an argument
  // Returns the amount as a string formatted in the required way (with '.00' if an integer given)

  #dateFormatter(date) // Will take a date as an argument
  // Returns the date formatted as 'DD/MM/YYYY'
}

```

## 3. Create Examples as Integration Tests

```js
const account = new Account;
account.deposit(32.00);
const statement = new Statement(account);
statement.print => "date || credit || debit || balance\n20/02/2023 || 32.00 || || 32.00"

const account = new Account;
account.deposit(300.00);
account.withdraw(100.00);
const statement = new Statement(account);
statement.print => "date || credit || debit || balance\n20/02/2023 || 300.00 || || 300.00\n20/02/2023 || || 100.00 || 200.00"

const account = new Account;
account.deposit(300);
account.withdraw(100.90);
const statement = new Statement(account);
statement.print => "date || credit || debit || balance\n20/02/2023 || 300.00 || || 300.00\n20/02/2023 || || 100.90 || 199.10"

const account = new Account;
account.deposit(300.00);
account.withdraw(100.00);
account.deposit(200.00);
const statement = new Statement(account);
statement.print => "date || credit || debit || balance\n20/02/2023 || 300.00 || || 300.00\n20/02/2023 || || 100.00 || 200.00\n20/02/2023 || 200.00 || || 400.00"

const account = new Account;
account.deposit(300.00);
account.withdraw(100.00);
account.deposit(200.00);
account.withdraw(50.00);
const statement = new Statement(account);
statement.print => "date || credit || debit || balance\n20/02/2023 || 300.00 || || 300.00\n20/02/2023 || || 100.00 || 200.00\n20/02/2023 || 200.00 || || 400.00\n20/02/2023 || || 50.00 || 350.00"

// When someone tries to print a statement without any transactions in an account
const account = new Account;
const statement = new Statement(account);
statement.print => "No transactions to show"

```

## 4. Create Examples as Unit Tests

```js
// Account Test cases: 

// When no money has been deposited or withdrawn, initially:
const account = new Account;
account.getAccountBalance() => 0

// When no money has been deposited or withdrawn, initially:
const account = new Account;
account.getAccountActivituy() => []

// When money is deposited
const account = new Account;
account.deposit(300.00)
account.getAccountBalance() => 300

// When money is deposited and withdrawn
const account = new Account;
account.deposit(300.00)
account.withdraw(100.00)
account.getAccountBalance() => 200
account.getAccountActivity() => [{date: "20/02/2023", credit: 300, debit: "", balance: 300}, {date: "20/02/2023", credit: "", debit: 100, balance: 200}]

// When someone tries to withdraw money and there's no money to withdraw
const account = new Account; 
account.withdraw(100.00) => raise error "Insufficient funds"

// When money is deposited but there's not enough to withdraw from 
const account = new Account; 
account.deposit(50)
account.withdraw(100.00) => raise error "Insufficient funds"

// When someone tries to deposit money with a string - fail 
const account = new Account; 
account.deposit("50") => raise error "Amount must be a number"

// When someone tries to withdraw money with a string - fail 
const account = new Account; 
account.withdraw("50") => raise error "Amount must be a number"


// Statement Test cases: 

const accountDouble = { getAccountActivity: () => [{date: {2023-02-20T17:14:21.276Z}, credit: 300, debit: "", balance: 300}, {date: {2023-02-20T17:14:21.276Z}, credit: "", debit: 100, balance: 200}] };
const statement = new Statement(accountDouble);
statement.print = "date || credit || debit || balance\n20/02/2023 || 300.00 || || 300.00\n20/02/2023 || || 100.00 || 200.00"

const accountDouble = { getAccountActivity: () => []}
statement.print = "No transactions to show"

```