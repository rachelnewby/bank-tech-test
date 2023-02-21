# Bank Tech Test

## The Requirements
* You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance Criteria
**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## The Solution
Started by developing user stories to understand the full scale of the requirements, and selected the most recurring and relevant verbs and nouns. 
A class system was designed, taking into consideration the required input and output, and how the user would interact with the program. 
I chose a two-class system for this challenge; the responsbility of ```acount```  is to handle and store the transactions. The responsibility of ```statement``` is to print out the statement in the required format. The reason for this is that it should make it easier to change the format of the statement when required (for instance, if statements are required in the USA, the date format can be amended appropriately). This also means that statements can be printed for multiple accounts without the need to repeat code. 

***The user stories, diagram, and full design can be found in the docs file, in the design-recipe.md.***

## To Run The Code
This program was built in JavaScript and uses the Jest test suit. It requires the following

```
nvm use node
npm add jest
npm install -g jest
```
To run the code: 
* Run node in the terminal
* Require the Account class ```const Account = require('./lib/account');```
* Require the Statement class ```const Statement = require('./lib/statement');```
* Create new instances of each: ```const account = new Account;``` ```const statement = new Statement(account);```
* You can now use the methods to perform the tasks you want (see below for function details)

### Account
* ```.deposit(n)``` takes a number as an argument to deposit that amount. This must be a number and it cannot have more than 2 decimal numbers.
* ```.withdraw(n)``` takes a number as an argument to withdraw that amount. This must be a number and it cannot have more than 2 decimal numbers. If you have not deposited any money into the account, or if you are trying to withdraw a number which exceeds the current balance, you will be thrown an error. 

### Statement
* This class requires an instance of account.
* ```.print()``` will print the statement of your account transactions. 

### Dependencies 
No dependencies were used. I contemplated including jest-extension but I found I could use the matchers without relying on the extension and therefore decided against it.

## Screenshots: Example of program being used
![Alt Text](https://raw.github.com/rachelnewby/banks-tech-test/main/docs/screenshots/bank-tech-test-single-deposit.png)
![Alt Text](https://raw.github.com/rachelnewby/banks-tech-test/main/docs/screenshots/bank-tech-test-multiple-transactions.png)
![Alt Text](https://raw.github.com/rachelnewby/banks-tech-test/main/docs/screenshots/bank-tech-test-edge-cases.png)

## Over 95% Test Coverage
![Alt Text](https://raw.github.com/rachelnewby/banks-tech-test/main/docs/screenshots/test-coverage.png)

## Potential Issues
There are potential issues if there are multiple amounts added with different 'penny amounts'. I.e: £42.62, £66.91, £88.05. Would need further stress testing and solutions to ensure the mathmatics are correct.