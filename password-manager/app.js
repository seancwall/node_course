console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

// account.name
// account.username
// account.password

function createAccount(account) {
  var accounts = storage.getItemSync('accounts');

  if (typeof accounts === 'undefined') {
    accounts = [];
  }

  accounts.push(account);

  storage.setItemSync('accounts', accounts);

  return account;
}

function getAccount(accountName) {
  var accounts = storage.getItemSync('accounts');
  var foundAccount = undefined;

  accounts.forEach(function(account) {
    if (account.name === accountName) {
      foundAccount = account;
    }
  });

  return foundAccount;
}
