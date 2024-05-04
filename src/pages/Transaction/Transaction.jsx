import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table, Flex, Select, Text, TextField } from '@radix-ui/themes';
import ParticipantSelect from '../../components/ParticipantSelect/ParticipantSelect';
import { getDivvyDetails } from '../../services/SessionStorage/fromSession'
//TODO Add turnery : Expense type reimbursement true show 'Paid to' table row, false show ParticipantSelect
import NavHeader from '../../components/NavHeader/NavHeader';

export default function Transaction() {
  const { divvyId } = useParams()
  const { transactionId } = useParams()
  const divvyDetails = getDivvyDetails(divvyId)

  const transaction = divvyDetails?.transactions?.find(transaction => transaction._id === transactionId)
  const divvyparticipants = divvyDetails?.participants

  //SAVE TRANSACITON FUNCTIONz
  const [currentTransactionName, setCurrentTransactionName] = useState(transaction.transactionName)
  const [currentTransactionType, setCurrentTransactionType] = useState(transaction.type)
  const [currentCost, setCurrentCost] = useState(transaction.amount);
  const [currentPaidBy, setCurrentPaidBy] = useState(transaction.paidBy)

  const handleTransactionNameChange = (e) => { setCurrentTransactionName(e.target.value) }
  const handleTransactionTypeChange = (e) => { 
    console.log(e)
    setCurrentTransactionType(e) 
  }
  const handleCostChange = (e) => { setCurrentCost(e.target.value) }
  const handlePaidByChange = (e) => { setCurrentPaidBy(e.target.value) }

  // TODO: Handle if expense type is Reimbursement so there's only one participant with an owesWho, meaning that should be the value of currentPaidTo

  return (
    <>
      <NavHeader title='Edit Transaction' />
      <Flex direction='column' gap='4' mt='5' >
        <Table.Root size='3'>
          <Table.Body >
            <Table.Row align='center'>
              <Table.Cell>
                <Text size='3'>Name</Text>
              </Table.Cell>
              <Table.Cell justify='end' >
                <TextField.Root
                  justify='end'
                  type='text'
                  size='3'
                  style={{ textAlign: 'right' }}
                  placeholder='New Transaction'
                  defaultValue={currentTransactionName}
                  onChange={handleTransactionNameChange}
                >
                  <TextField.Slot> </TextField.Slot>
                  <TextField.Slot px='1'></TextField.Slot>
                </TextField.Root>
              </Table.Cell>
            </Table.Row>
            <Table.Row align='center'>
              <Table.Cell>Type</Table.Cell>
              <Table.Cell justify='end'>
                <Select.Root
                  size='3'
                  defaultValue={currentTransactionType}
                  onValueChange={handleTransactionTypeChange}
                >
                  <Select.Trigger variant='ghost' />
                  <Select.Content>
                    <Select.Item value='expense'>Expense</Select.Item>
                    <Select.Item value='refund'>Refund</Select.Item>
                    <Select.Item value='reimbursement'>Reimbursement</Select.Item>
                  </Select.Content>
                </Select.Root>
              </Table.Cell>
            </Table.Row>
            <Table.Row align='center'>
              <Table.Cell>Amount</Table.Cell>
              <Table.Cell justify='end' >
                <TextField.Root
                  justify='end'
                  size='3'
                  type="number"
                  style={{ textAlign: 'right' }}
                  defaultValue={Number(currentCost)}
                  onChange={handleCostChange}
                >
                  <TextField.Slot>$</TextField.Slot>
                  <TextField.Slot px='0'></TextField.Slot>
                </TextField.Root>
              </Table.Cell>
            </Table.Row>
            <Table.Row align='center'>
              <Table.Cell>Paid By</Table.Cell>
              <Table.Cell justify='end'>
                <Select.Root
                  defaultValue={currentPaidBy}
                  size='3'
                  onChange={handlePaidByChange}
                >
                  <Select.Trigger variant='ghost' />
                  <Select.Content>
                    {divvyparticipants.map(participant => {
                      return <Select.Item key={participant._id} value={participant.participantName}>
                        {participant.participantName}
                      </Select.Item>
                    })}
                  </Select.Content>
                </Select.Root>
              </Table.Cell>
            </Table.Row>
            {
              currentTransactionType === 'reimbursement' &&
                <Table.Row align='center'>
                  <Table.Cell>Paid to</Table.Cell>
                  <Table.Cell justify='end'>
                    <Select.Root
                      size='3'
                    >
                      <Select.Trigger variant='ghost' />
                      <Select.Content>
                        {divvyparticipants.map(participant => {
                          return <Select.Item key={participant._id} value={participant.participantName}>
                            {participant.participantName}
                          </Select.Item>
                        })}
                      </Select.Content>
                    </Select.Root>
                  </Table.Cell>
                </Table.Row>
            //TODO: Add submit button for reimbursement
            }
          </Table.Body>
        </Table.Root>
        {
          currentTransactionType === 'expense' &&
            <ParticipantSelect transaction={transaction} divvyparticipants={divvyparticipants} currentCost={currentCost} />
          //TODO: Add submit button for expense
        }
        {
          //TODO: Add the plus sign infront of the dollar sign
          currentTransactionType === 'refund' &&
            <ParticipantSelect transaction={transaction} divvyparticipants={divvyparticipants} currentCost={currentCost} />
          //TODO: Add submit button for refund
        }
      </Flex >
    </>
  )
}