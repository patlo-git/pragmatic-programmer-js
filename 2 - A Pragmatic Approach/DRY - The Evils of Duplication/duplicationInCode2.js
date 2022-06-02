console.log('-- Example 2 --');

const accountExample = {
  debits: 10000,
  credits: 5000,
  fees: -100,
  balance: 1000000,
};

const button = document.querySelector('.print');
button.addEventListener('click', () => printBalance(accountExample));

function printBalance(account) {
  console.log('Debits: $' + account.debits.toString());
  console.log('Credits: $' + account.credits.toString());
  console.log('Fees: ' + formatAmount(account.fees));
  console.log('---');
  console.log('Balance: ' + formatAmount(account.balance));
}

function formatAmount(value) {
  let string = '$' + Math.abs(value).toString() // -100 -> '$100'

  if (value < 0) {
    string = '-' + string; '-$100'
  }

  return string;
}
