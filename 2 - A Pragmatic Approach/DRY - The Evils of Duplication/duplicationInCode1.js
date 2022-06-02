console.log('-- Example 1 --');

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

  if (account.fees < 0) {
    console.log('Fees: -$' + Math.abs(account.fees).toString());
  } else {
    console.log('Fees: $' + account.fees.toString());
  }

  console.log('---');

  if (account.balance < 0) {
    console.log('Balance: -$' + Math.abs(account.balance).toString());
  } else {
    console.log('Balance: $' + account.balance.toString());
  }
}
