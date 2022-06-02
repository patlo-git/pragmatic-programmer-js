/*
Calculate the fees for this account
  Each returned check costs $20
  If the account is in overdraft for more than 3 days,
    charge $10 for each day
  If the average account balance is greater than $2,000
    reduce the fees by 50%
*/
function fees(a) {
  let f = 0;

  if (a.returnedCheckCount > 0) {
    f += 20 * a.returnedCheckCount;
  }

  if (a.overdraftDays > 3) {
    f += 10 * a.overdraftDays;
  }

  if (a.averageBalance > 2000) {
    f = f / 2;
  }

  return f;
}

const account = {
  returnedCheckCount: 1,
  overdraftDays: 4,
  averageBalance: 10000,
};

console.log(fees(account));
