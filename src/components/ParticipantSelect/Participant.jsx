import { Table, Text, Flex, Checkbox } from '@radix-ui/themes';


export default function ParticipantSelect() {
  return (
<>
    <Table.Row>
    <Table.Cell justify='start'>
              <Text as='label' size='4'>
                <Flex gap='2'>
                <Checkbox  color='indigo' size='3' />
                Aris
                </Flex>
                </Text>
            </Table.Cell>
            <Table.Cell justify='end'></Table.Cell>
          </Table.Row>
          <Table.Row>
    <Table.Cell justify='start'>
    <Text as='label' size='4'>
                <Flex gap='2'>
                <Checkbox color='cyan' size='3' />
                Josh
                </Flex>
                </Text>
            </Table.Cell>
            <Table.Cell justify='end'>$8</Table.Cell>
          </Table.Row>
          <Table.Row>
    <Table.Cell justify='start'>
    <Text as='label' size='4'>
                <Flex gap='2'>
                <Checkbox color='orange' size='3' />
                Ian
                </Flex>
                </Text>
            </Table.Cell>
            <Table.Cell justify='end'>$8</Table.Cell>
          </Table.Row>
          <Table.Row>
    <Table.Cell justify='start'>
    <Text as='label' size='4'>
                <Flex gap='2'>
                <Checkbox color='crimson' size='3' />
                Will
                </Flex>
                </Text>
            </Table.Cell>
            <Table.Cell justify='end'></Table.Cell>
          </Table.Row>
          <Table.Row>
          </Table.Row>
          </>
  )
}


