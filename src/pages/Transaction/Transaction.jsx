import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table, Flex, Select, Text, TextField } from '@radix-ui/themes';
import ParticipantSelect from '../../components/ParticipantSelect/ParticipantSelect';
import { getDivvyDetails } from '../../services/API/apiHelpers'

//TODO Add turnery : Expense type reimbursement true show 'Paid to' table row, false show ParticipantSelect

export default function Transaction() {
  const { divvyId } = useParams()
  const { transactionId } = useParams()
  const divvyDetails = getDivvyDetails(divvyId)
  console.log(divvyDetails);
  const transaction = divvyDetails?.transactions?.find(transaction => transaction._id === transactionId)
  const divvyparticipants = divvyDetails?.participants
  console.log(transaction);
  const [currentTransactionName, setCurrentTransactionName] = useState(transaction.transactionName)
  const [currentTransactionType, setCurrentTransactionType] = useState(transaction.type)
  const [currentCost, setCurrentCost] = useState(transaction.amount);
  const [currentPaidBy, setCurrentPaidBy] = useState(transaction.paidBy)

  const handleTransactionNameChange = (e) => { setCurrentTransactionName(e.target.value) }
  const handleTransactionTypeChange = (e) => { setCurrentTransactionType(e.target.value) }
  const handleCostChange = (e) => { setCurrentCost(e.target.value) }
  const handlePaidByChange = (e) => { setCurrentPaidBy(e.target.value) }

  // TODO: Handle array of participants & calculations
  // const [currentParticipants, setCurrentParticipants] = useState({ participants });
  // const handleParticipantsChange = (e) => { setCurrentParticipants(e.target.value) }

  // TODO: Handle if expense type is Reimbursement so there's only one participant with an owesWho, meaning that should be the value of currentPaidTo
  // const [currentPaidTo, setCurrentPaidTo] = useState(TBD);
  // const handlePaidToChange = (e) => { setCurrentPaidTo(e.target.value) }

  return (
    <>
      <Flex direction='column' gap='4' mt='5' >
        <Table.Root size='3'>
          <Table.Body >
            <Table.Row align='center'>
              <Table.Cell>
                <Text size='3'>Name</Text>
              </Table.Cell>
              <Table.Cell justify='end' >
                <TextField.Root
                  type='text'
                  size='3'
                  className='input-field-right'
                  placeholder='New Transaction'
                  defaultValue={currentTransactionName}
                  onChange={handleTransactionNameChange}
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row align='center'>
              <Table.Cell>Type</Table.Cell>
              <Table.Cell justify='end'>
                <Select.Root
                  size='3'
                  defaultValue={currentTransactionType}
                  onChange={handleTransactionTypeChange}
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
                  className='input-field-right'
                  defaultValue={Number(currentCost)}
                  onChange={handleCostChange}
                />
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
            {currentTransactionType === 'reimbursement'
              ? paidToSnippet(divvyparticipants)
              : null
            }
          </Table.Body>
        </Table.Root>
        {currentTransactionType !== 'reimbursement' &&
          <ParticipantSelect transaction={transaction} divvyparticipants={divvyparticipants} currentCost={currentCost} />
        }
      </Flex >
    </>
  )
}

function paidToSnippet(divvyparticipants) {
  return (
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
  )
}