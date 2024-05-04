import { Flex, Table } from '@radix-ui/themes'
import TransactionListItem from '../TransactionListItem/TransactionListItem'
import { AddButton } from '../AddButton/AddButton'
import { getDivvyDetails } from '../../services/SessionStorage/fromSession'
import { useParams } from 'react-router-dom'
import { divvyDetialReroute } from '../../services/Logic/buttonRerouteLogic'
export default function DivvyDetail() {
  const { divvyId } = useParams()
  const divvyDetails = getDivvyDetails(divvyId)
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
      <AddButton action={divvyDetialReroute} />
    </>
  )
}