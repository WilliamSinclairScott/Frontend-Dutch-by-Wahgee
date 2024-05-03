/**
 * Calculate the balance of each participant in the divvy
 * @param {*} divvy 
 * @returns [{name : participant, owes: [name: participant, amount: amount], balance: +-number}, ...]
 */
export const calculateBalance = async (divvy) => {
  const participants = divvy.participants;
  const transactions = divvy.transactions;
  let balance = participants.map(participant => {
    const name = participant.name;
    const owesTotal = participant.owesWho.map(owe => {
      return owe.amount;
    }).reduce((acc, amount) => acc + amount, 0);
    const paid = transactions.filter(transaction => {
      return transaction.paidBy === name ? transaction.paidBy : null} );
    const paidTotal = paid.reduce((acc, transaction) => acc + transaction.amount, 0);
    const balance = paidTotal - owesTotal;
    return {name, owes, balance};
  });
  return balance;
}