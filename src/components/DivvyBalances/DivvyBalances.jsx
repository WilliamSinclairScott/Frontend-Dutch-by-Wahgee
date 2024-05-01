import { Flex } from '@radix-ui/themes'
import ParticipantBalance from '../ParticipantBalance/ParticipantBalance'
import { AddButton } from '../AddButton/AddButton'

export default function DivvyBalances() {
  return (
    <>
      <Flex direction='column' justify='start'>
        <ParticipantBalance />
      </Flex>
      <AddButton />
    </>
  )
}
