console.log('-- Example 3 --');

const accountExample = {
  debits: 10000,
  credits: 5000,
  fees: -100,
  balance: 1000000,
}

function printBalance(account) {
  console.log('Debits: ' + formatAmount(account.debits));
  console.log('Credit: ' + formatAmount(account.credits));
  console.log('Fees: ' + formatAmount(account.fees));
  console.log('---');
  console.log('Balance: ' + formatAmount(account.balance));
}

function formatAmount(value) {
  let string = '$' + Math.abs(value).toString()

  if (value < 0) {
    string = '-' + string;
  }

  return string;
}

printBalance(accountExample);
