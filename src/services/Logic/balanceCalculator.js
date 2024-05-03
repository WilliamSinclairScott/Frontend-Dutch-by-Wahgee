/**
 * Calculate the balance of each participant in the divvy
 * @param {*} divvy 
 * @returns [{name : participant, owes: [name: participant, amount: amount], balance: +-number}, ...]
 */
export const calculateBalance = (divvy) => {
  const participants = divvy.participants;
  const transactions = divvy.transactions;
  console.log('Participants',participants);
  console.log('Transactions',transactions);
  let balance = participants.map(participant => {
    const name = participant.participantName;
    let owesTotal = participant.owesWho.map(owe => {
      return owe.amount;
    }).reduce((acc, amount) => acc + amount, 0);
    const paid = transactions.filter(transaction => {
      return transaction.paidBy === name ? transaction.amount : null} )
    const paidTotal = paid.reduce((acc, transaction) => acc + transaction.amount, 0);
    const balance = paidTotal - owesTotal;
    console.log(`Balance for ${name} is ${balance} with ${paidTotal} total paid and ${owesTotal} total owes.`);
    // owes = [...{name: participant, amount: amount}]
    const owes = [];
    return { name, owes, balance };
  });
  
  // Assign the owes array to each participant object using a greedy algorithm
  // sort balance from most negative to most positive
  balance.sort((a, b) => a.balance - b.balance);
  for (let i = 0; i < balance.length; i++) {
    let owes = balance[i].balance;
    let j = balance.length - 1;
    while (owes < 0) {
      if (balance[j].balance > 0) {
        let amount = Math.min(-owes, balance[j].balance);
        console.log(`${balance[i].name} owes ${balance[j].name} $${amount}`);
        balance[i].owes.push({ name: balance[j].name, amount });
        owes += amount;
      }
      j--;
    }
  }
  return balance;
}