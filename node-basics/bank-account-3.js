var accounts = [];

function createAccount(account) {
  accounts.push(account);
  return account;
}

function getAccount(username) {
  var matchedAccount;
  var i;

  for (i = 0; i < accounts.length; i++) {
    if (accounts[i].username === username) {
      matchedAccount = accounts[i];
    }
  }

  return matchedAccount;
}

function deposit(account, amount) {
  if (typeof amount === 'number') {
    account.balance += amount;
  } else {
    console.log('amount was not a number');
  }
}

function withdraw(account, amount) {
  if (typeof amount === 'number') {
    account.balance -= amount;
  } else {
    console.log('amount was not a number');
  }
}

function getBalance(account) {
  return account.balance;
}

function createBalanceGetter(account) {
  return function() {
    return account.balance;
  }
}

createAccount({balance: 1000.0, username: 'Sean'});
var account = getAccount('Sean');

deposit(account, 123.45);
deposit(account, 'bad');
withdraw(account, 44.32);
withdraw(account, 'also bad');

var balance = createBalanceGetter(account);
console.log('balance: ' + balance());
