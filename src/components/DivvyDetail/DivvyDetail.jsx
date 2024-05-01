import { Flex, Table } from '@radix-ui/themes'
import TransactionListItem from '../TransactionListItem/TransactionListItem'
import { AddButton } from '../AddButton/AddButton'

export default function DivvyDetail() {
  return (
    <>
      <Flex direction='column' justify='start'>
        <Table.Root size='1'>
          <Table.Body>
            <TransactionListItem />
          </Table.Body>
        </Table.Root>
      </Flex>
      <AddButton />
    </>
  )
}