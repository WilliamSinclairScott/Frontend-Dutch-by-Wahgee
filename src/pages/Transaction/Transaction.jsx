import { Table, Flex, Select, Text, } from '@radix-ui/themes';
import ParticipantSelect from '../../components/ParticipantSelect/Participant';
import ParticipantAdd from '../../components/ParticipantAdd/ParticipantAdd';
// import DivvyNotiDialog from '../../components/DivvyNotiDialog/DivvyNotiDialog';
// import DivvyAlertDialog from '../../components/DivvyAlertDialog/DivvyAlertDialog';

export default function Transaction() {
  return (
    <>
    <Flex direction='column' gap='4' mt='5' >
      <Table.Root variant='surface' size='3'>
    <Table.Row>
            <Table.Cell>Type</Table.Cell>
            <Table.Cell justify='end'>
            <Select.Root defaultValue='Expense' size='3' >
              <Select.Trigger variant='ghost' />
              <Select.Content>            
                <Select.Item value='Expense'>Expense</Select.Item>
                <Select.Item value='Reimbursement'>Reimbursement</Select.Item>
                <Select.Item value='Refund'>Refund</Select.Item>
              </Select.Content>
            </Select.Root>
              </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Amount</Table.Cell>
            <Table.Cell justify='end' >$16</Table.Cell>

          </Table.Row>
          <Table.Row>
            <Table.Cell>Paid By</Table.Cell>
            <Table.Cell justify='end'>
            <Select.Root defaultValue='Ian' size='3' >
              <Select.Trigger variant='ghost' />
              <Select.Content>            
                <Select.Item value='Ian'>Ian</Select.Item>
                <Select.Item value='Will'>Will</Select.Item>
                <Select.Item value='Josh'>Josh</Select.Item>
                <Select.Item value='Arris'>Arris</Select.Item>
              </Select.Content>
            </Select.Root>
              </Table.Cell>
          </Table.Row>
          {/* TODO Paid for only shows when user has clicked type (refund) and the participant select component hides */}
          <Table.Row>
            <Table.Cell>Paid For</Table.Cell>
            <Table.Cell justify='end'>
            <Select.Root defaultValue='Ian' size='3' >
              <Select.Trigger variant='ghost' />
              <Select.Content>            
                <Select.Item value='Ian'>Ian</Select.Item>
                <Select.Item value='Will'>Will</Select.Item>
                <Select.Item value='Josh'>Josh</Select.Item>
                <Select.Item value='Arris'>Arris</Select.Item>
              </Select.Content>
            </Select.Root>
              </Table.Cell>
          </Table.Row>
          </Table.Root>
          </Flex>
          <Flex direction='column' mt='9' >
          <Text size='5' ml='2' mb='2'  >For:</Text>
      <Table.Root variant='surface' size='3'>
          <ParticipantSelect />
          </Table.Root>
          <ParticipantAdd />
         {/* <DivvyNotiDialog /> 
            <DivvyAlertDialog /> */}
          </Flex>
          
         
          </>
  )
}

