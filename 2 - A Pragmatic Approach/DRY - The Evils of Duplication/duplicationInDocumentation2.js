// single source of truth
// more explicitly states what's going on rather than comment
function calculateAccountFees(account) {
  let fees = 0;

  if (account.returnedCheckCount > 0) {
    fees += 20 * account.returnedCheckCount;
  }

  if (account.overdraftDays > 3) {
    fees += 10 * account.overdraftDays;
  }

  if (account.averageBalance > 2000) {
    fees = fees / 2;
  }

  return fees;
}

const account = {
  returnedCheckCount: 1,
  overdraftDays: 4,
  averageBalance: 10000,
};

console.log('Fees: ', calculateAccountFees(account));
