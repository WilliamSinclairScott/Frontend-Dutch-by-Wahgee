import { Flex, Table } from '@radix-ui/themes'
import TransactionListItem from '../TransactionListItem/TransactionListItem'
import { AddButton } from '../AddButton/AddButton'
import { getDivvyDetails } from '../../services/API/apiHelpers'
import { useParams } from 'react-router-dom'

// Component to display detailed information about a specific divvy, including its transactions.
export default function DivvyDetail() {
  const { divvyId } = useParams() // Get divvy ID from URL parameters
  const divvyDetails = getDivvyDetails(divvyId) // Retrieve divvy details including transactions
  const divvyTransactions = divvyDetails.transactions

  return (
    <>
      <Flex direction='column' justify='start'>
        <Table.Root size='1'>
          <Table.Body>
            {divvyTransactions.map(transaction => (
              <TransactionListItem
                key={transaction._id}
                transactionType={transaction.type}
                amount={transaction.amount}
                date={transaction.date}
                _id={transaction._id}
                transactionName={transaction.transactionName}
                details={transaction.breakdown}
                paidBy={transaction.paidBy}
              />
            ))}
          </Table.Body>
        </Table.Root>
      </Flex>
      <AddButton />
    </>
  )
}