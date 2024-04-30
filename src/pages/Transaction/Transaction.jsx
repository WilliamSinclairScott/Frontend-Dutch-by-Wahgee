import { Table, IconButton, Flex } from '@radix-ui/themes';
import { ChevronDownIcon } from '@radix-ui/react-icons'
import ParticipantSelect from '../../components/ParticipantSelect/Participant';

export default function Transaction() {
  return (
    <>
    <Flex direction='column' gap='4' mt='5' >
      <Table.Root variant='surface' size='3'>
    <Table.Row>
            <Table.Cell>Type</Table.Cell>
            <Table.Cell justify='end'>
            <IconButton variant="ghost">
                <ChevronDownIcon width="24" height="24"  />
              </IconButton>
              </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Amount</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Paid By</Table.Cell>
            <Table.Cell justify='end'>
            <IconButton variant="ghost">
                <ChevronDownIcon width="24" height="24"  />
              </IconButton>
              </Table.Cell>
          </Table.Row>
          </Table.Root>
          </Flex>
          <Flex direction='column' gap='4' mt='9' >
      <Table.Root variant='surface' size='3'>
          <ParticipantSelect />
          </Table.Root>
          </Flex>
         
          </>
  )
}

