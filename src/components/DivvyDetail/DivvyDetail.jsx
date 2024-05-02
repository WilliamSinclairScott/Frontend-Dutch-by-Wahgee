import { Flex, Table } from '@radix-ui/themes'
import TransactionListItem from '../TransactionListItem/TransactionListItem'
import { AddButton } from '../AddButton/AddButton'
import { getDivvyDetails } from '../../services/API/apiHelpers'
import { useParams } from 'react-router-dom'

export default function DivvyDetail() {
  const { divvyId } = useParams()
  const divvyDetails = getDivvyDetails(divvyId)
const divvyTransactions = divvyDetails.transactons

  return (
    <>
      <Flex direction='column' justify='start'>
        <Table.Root size='1'>
          <Table.Body>  
            {divvyTransactions.map(transaction => 
            <TransactionListItem divvyType={transaction.type} divvyAmount={transaction.amount} divvyDate={transaction.date} _id={transaction.id} divvyTransactionName={transaction.transactionName} key={transaction.id} />
            )}
            
          </Table.Body>
        </Table.Root>
      </Flex>
      <AddButton />
    </>
  )
}