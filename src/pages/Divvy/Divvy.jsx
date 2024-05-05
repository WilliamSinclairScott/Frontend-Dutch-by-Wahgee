import { useState } from 'react'
import Transaction from '../Transaction/Transaction'
import { Flex, Tabs, Box, Text } from '@radix-ui/themes'
import NavHeader from '../../components/NavHeader/NavHeader'
import DivvyDetail from '../../components/DivvyDetail/DivvyDetail'
import DivvyBalances from '../../components/DivvyBalances/DivvyBalances'
import DivvyEdit from '../../components/DivvyEdit/DivvyEdit'
import { getUserId, getDivvyDetails, getUserDisplayName } from '../../services/SessionStorage/fromSession'
import { updateDivvy,createTransaction } from '../../services/API/divvyRequests'
import { useParams } from 'react-router-dom'

export default function Divvy() {
    //TODO: Make this a secure function after merging is all working
  //TODO: figure out possible transactionDelete from Transaction
  const { divvyId } = useParams()
  const divvyDetails = getDivvyDetails(divvyId)

  const [editMode, setEditMode] = useState(false)
  const [addTransaction, setAddTransaction] = useState(false)
  const changeTransactionStatus = () => {setAddTransaction(!addTransaction)}
  const [divvyName, setDivvyName] = useState(divvyDetails.divvyName)
  //Actual participant object
  const [participants, setParticipants] = useState(divvyDetails.participants)
  //Needs to be passed to Transaction to be edited and hoiseted back for createTransaction
  const [transactionName, setTransactionName] = useState('')
  const [transactionType, setTransactionType] = useState('expense')
  const [transactionAmount, setTransactionAmount] = useState(0)
  const [transactionPaidBy, setTransactionPaidBy] = useState(getUserDisplayName)
  const [transactionBreakdown, setTransactionBreakdown] = useState([])
  
  const deleteParticipant = (e) => {
    //TODO: Stop deletion if participant has transactions or owesWho
    const updated = [...participants]
    console.log('e.target.id', e.target.id)
    if (e.target.id) {
      console.log('delete', updated[e.target.id])
      updated.splice(e.target.id, 1)
      setParticipants(updated)
    }
  }
//
  const debounceChange = (e) => {
    const updated = [...participants]
    console.log(updated)
    updated[e.target.id].participantName = e.target.value
    setParticipants(updated)
    
    // let delay
    // clearTimeout(delay)
    // delay = setTimeout(() => {
    //   console.log('debounced', e.target.value, e.target.id)
    //   //remove the old value and replace with the new value
    // }, 1500)
  }
  
  return (
    <>
      <NavHeader 
      title= {addTransaction ? 'New Transaction' : divvyName}
      addTransaction={addTransaction}
      setAddTransaction={setAddTransaction}
      editMode={editMode}
      setEditMode={setEditMode}
      apiRequestOnSave={(addTransaction ? createTransaction : updateDivvy)}
      dataForapiRequestOnSave={addTransaction ? {
        //TODO: Add createTransaction data
        divvyId: divvyId,
        transactionName: transactionName,
        type: transactionType,
        amount: transactionAmount,
        paidBy: transactionPaidBy,
        breakdown: transactionBreakdown
      }:{
        //TODO: Add update divvy data
        divvyId: divvyId,
        divvyName: divvyName,
        owner: getUserId(),
        participants: participants
      }}
      />
      { !addTransaction &&
        <Flex direction='column'>
          { !editMode &&
            <Tabs.Root defaultValue='details'>
              <Tabs.List justify='center'>
                <Tabs.Trigger value='details'>
                  <Text size='5'>Details</Text>
                </Tabs.Trigger>
                <Tabs.Trigger value='balances'>
                  <Text size='5'>Balances</Text>
                </Tabs.Trigger>
              </Tabs.List>
              <Box pt='2'>
                <Tabs.Content value='details'>
                  <DivvyDetail
                    changeTransactionStatus={changeTransactionStatus}
                    // divvyName={divvyName}
                    // setDivvyName={setDivvyName}
                    // participants={participants}
                    // setParticipants={setParticipants}
                    // isUpdate={true}
                    // deleteParticipant={deleteParticipant}
                    // debounceChange={debounceChange}
                    />
                </Tabs.Content>
                <Tabs.Content value='balances'>
                  <DivvyBalances />
                </Tabs.Content>
              </Box>
            </Tabs.Root>
          }
          {
            editMode &&
            <DivvyEdit
              divvyName={divvyName}
              setDivvyName={setDivvyName}
              participants={participants}
              setParticipants={setParticipants}
              isUpdate={true}
              deleteParticipant={deleteParticipant}
              debounceChange={debounceChange}
            />

          }
        </Flex >
        }
        {  
        addTransaction &&
          <Transaction
          newTransaction={addTransaction}
          transactionName={transactionName}
          setTransactionName={setTransactionName}
          transactionType={transactionType}
          setTransactionType={setTransactionType}
          transactionAmount={transactionAmount}
          setTransactionAmount={setTransactionAmount}
          transactionPaidBy={transactionPaidBy}
          setTransactionPaidBy={setTransactionPaidBy}
          transactionBreakdown={transactionBreakdown}
          setTransactionBreakdown={setTransactionBreakdown}
          participants={participants}
          setParticipants={setParticipants}
          />
        }
      </>
      )
}