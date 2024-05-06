import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table, Flex, Select, Text, TextField } from '@radix-ui/themes';
import ParticipantSelect from '../../components/ParticipantSelect/ParticipantSelect';
import { getDivvyDetails } from '../../services/SessionStorage/fromSession'
//TODO Add turnery : Expense type reimbursement true show 'Paid to' table row, false show ParticipantSelect
import NavHeader from '../../components/NavHeader/NavHeader';
import DutchAlertDialog from '../../components/DutchAlertDialog/DutchAlertDialog';
import { updateTransaction } from '../../services/API/divvyRequests';
import { deleteTransaction } from '../../services/API/divvyRequests';
import { CornerTopLeftIcon } from '@radix-ui/react-icons';

export default function Transaction({
  newTransaction,
  transactionName,
  setTransactionName,
  transactionType,
  setTransactionType,
  transactionAmount,
  setTransactionAmount,
  transactionPaidBy,
  setTransactionPaidBy,
  transactionBreakdown,
  setTransactionBreakdown,
  participants,
  setParticipants,

}) {

  if (newTransaction) {
    //Im going to need the following back
    // transactionName,
    // transactionType,
    // transactionAmount,
    // transactionPaidBy,
    // transactionBreakdown,

  }


  const { divvyId } = useParams()
  const { transactionId } = useParams()
  const divvyDetails = getDivvyDetails(divvyId)

  let transaction = divvyDetails?.transactions?.find(transaction => transaction._id === transactionId)
  const [divvyparticipants, setDivvyParticipants] = useState(divvyDetails?.participants)

  if (newTransaction) {
    transaction = {
      transactionName: transactionName,
      type: transactionType,
      amount: transactionAmount,
      paidBy: transactionPaidBy,
      breakdown: transactionBreakdown,
    }
  }
  //Initialize Input states
  const [currentTransactionName, setCurrentTransactionName] = useState(transaction.transactionName)
  const [currentTransactionType, setCurrentTransactionType] = useState(transaction.type)
  const [currentCost, setCurrentCost] = useState(transaction.amount);
  const [currentPaidBy, setCurrentPaidBy] = useState(transaction.paidBy)
  
  let startingActiveParticipants = transaction.breakdown.map(participant => participant.name)
  if (newTransaction) startingActiveParticipants = divvyDetails.participants.map(participant => participant.participantName)
  //console.log('startingActiveParticipants', startingActiveParticipants)
  const [activeParticipants, setActiveParticipants] = useState(startingActiveParticipants)
  const handleActiveParticipantsChange = (e) => {

    const participantName = e.target.parentElement.nextSibling.textContent.trim();
    console.log('Hey, Add or remove: ',participantName);
    if (activeParticipants.includes(participantName)) {
      const newActives = activeParticipants.filter(participant => participant !== participantName);
      setActiveParticipants(newActives)
    } else {
      const newActives = [...activeParticipants, participantName]
      setActiveParticipants(newActives)
    }
  }

  const handleTransactionNameChange = (e) => {

    setCurrentTransactionName(e.target.value)
    if (newTransaction){
      setTransactionName(currentTransactionName)
    }
  }

  const handleTransactionTypeChange = (e) => {

    setCurrentTransactionType(e)
    if (newTransaction) {
      setTransactionType(currentTransactionType)
    }
  }

  const handelReImbursement = (e) => {
    setActiveParticipants([e])

  }

  const handleCostChange = (e) => {

    setCurrentCost(e.target.value)
    if (newTransaction) {
      setTransactionAmount(currentCost)
    }
  }

  const handlePaidByChange = (e) => {
    setCurrentPaidBy(e)
    if (newTransaction) setTransactionPaidBy(currentPaidBy)
  }

  useEffect( () => {
    // Code to grab the information on the page when something changes
    setActiveParticipants(activeParticipants)
    //console.log('activeParticipants', activeParticipants)
    
    // console.log('currentTransactionName', currentTransactionName)
    // console.log('currentTransactionType', currentTransactionType)
    //console.log('before set in use effect', currentCost)
    // console.log('currentPaidBy', currentPaidBy)
    setCurrentTransactionName(currentTransactionName)
    setCurrentTransactionType(currentTransactionType)
    setCurrentCost(currentCost)
    setCurrentPaidBy(currentPaidBy)
    //console.log('useEffect paidBy', currentPaidBy)
    if(newTransaction) {
      setTransactionName(currentTransactionName)
      setTransactionType(currentTransactionType)
      setTransactionAmount(currentCost)
      setTransactionPaidBy(currentPaidBy)
      console.log('activeParticipants', activeParticipants)
      setTransactionBreakdown(activeParticipants.map(activeParticipant => {
      return { name: activeParticipant, percentage: 1/activeParticipants.length }
      }))
    }
  }, [activeParticipants, currentTransactionName, currentTransactionType, currentCost, currentPaidBy]);
  // TODO: Handle if expense type is Reimbursement so there's only one participant with an owesWho, meaning that should be the value of currentPaidTo

  return (
    <>
      {
        !newTransaction &&
        <NavHeader
          title='Edit Transaction'
          apiRequestOnSave={updateTransaction}
          dataForapiRequestOnSave={
            {
              transactionId: transactionId,
              divvyId: divvyId,
              transactionName: currentTransactionName,
              type: currentTransactionType,
              amount: currentCost,
              paidBy: currentPaidBy,
              //TODO: Add breakdown
              breakdown: activeParticipants.map(activeParticipant => {
                return { name: activeParticipant, percentage: 1/activeParticipants.length }
              })
            }
          }
        />}
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
                  onValueChange={handlePaidByChange}
                >
                  <Select.Trigger variant='ghost' />
                  <Select.Content>
                    {divvyparticipants.map(participant => {
                      return <Select.Item key={participant._id} 
                      value={participant.participantName ? participant.participantName: participant}
                      >
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
                    onValueChange={handelReImbursement}
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
          currentTransactionType !== 'reimbursement' &&
          <ParticipantSelect
            transaction={transaction}
            setDivvyParticipants={setDivvyParticipants}
            divvyparticipants={divvyparticipants}
            currentCost={currentCost}
            handleActiveParticipantsChange={handleActiveParticipantsChange}
            portion={currentCost * 1/activeParticipants.length}
            activeParticipants={activeParticipants}
          />
          //TODO: Add submit button for expense
        }
        {!newTransaction && (
        <DutchAlertDialog
          triggerButtonText={`Delete ${currentTransactionName}`}
          triggerButtonVariant='outline'
          title={`Delete ${currentTransactionName}`}
          message='Are you sure you want to delete this transaction? This action cannot be undone.'
          cancelButtonText='Cancel'
          actionButtonText='Delete'
          action={() => deleteTransaction(divvyId, transactionId)}
            // console.log('Delete Transaction Button is being called')}
          // action={deleteTransaction (divvyId, transactionId)}
        />
      )}
      </Flex >
    </>
  )
}