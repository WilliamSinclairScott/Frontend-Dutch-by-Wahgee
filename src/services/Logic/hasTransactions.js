export default function hasTransactions(divvyDetails, participantName) {
  const hasOwesWho = divvyDetails.participants.some(
    participant => participant.participantName === participantName && participant.owesWho.length > 0
  )
  const hasPaidBy = divvyDetails.transactions.some(transaction => transaction.paidBy === participantName)
  return hasOwesWho || hasPaidBy
}