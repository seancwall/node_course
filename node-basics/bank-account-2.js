var accounts = [];

function createAccount(account) {
  accounts.push(account);
  return account;
}

function getAccount(username) {
  var matchedAccount;

  accounts.forEach(function(account) {
    if (account.username === username) {
      matchedAccount = account;
    }
  });

  return matchedAccount;
}

function deposit(account, amount) {
  account.balance += amount;
}

function withdraw(account, amount) {
  account.balance -= amount;
}

function getBalance(account) {
  return account.balance;
}

createAccount({balance: 1000.0, username: 'Sean'});
createAccount({balance: 575.45, username: 'Bobo'});

var account = getAccount('Bobo');
console.log(account);

deposit(account, 123.45);

console.log(getBalance(account));

deposit(account, 99.40);

withdraw(account, 66.00);

console.log(getBalance(account));
