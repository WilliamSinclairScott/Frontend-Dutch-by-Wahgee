import { Flex } from '@radix-ui/themes'
import TransactionListItem from '../TransactionListItem/TransactionListItem'
import { AddButton } from '../AddButton/AddButton'

export default function DivvyDetail() {
  return (
    <>
      <Flex direction='column' justify='start'>
        <TransactionListItem />
      </Flex>
      <AddButton />
    </>
  )
}
