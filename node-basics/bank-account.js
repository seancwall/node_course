var account = {
  balance: 0
};

function deposit(account, amount) {
  account.balance += amount;
}

function withdraw(account, amount) {
  account.balance -= amount;
}

function getBalance(account) {
  return account.balance;
}

deposit(account, 123.45);

console.log(getBalance(account));

deposit(account, 99.40);

withdraw(account, 66.00);

console.log(getBalance(account));
