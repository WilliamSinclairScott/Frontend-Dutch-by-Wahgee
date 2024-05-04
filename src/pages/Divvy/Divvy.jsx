import { useState } from 'react'
import { Flex, Tabs, Box, Text } from '@radix-ui/themes'
import NavHeader from '../../components/NavHeader/NavHeader'
import DivvyDetail from '../../components/DivvyDetail/DivvyDetail'
import DivvyBalances from '../../components/DivvyBalances/DivvyBalances'
import Transaction from '../../pages/Transaction/Transaction'
import { getDivvyDetails } from '../../services/SessionStorage/fromSession'
import { useParams } from 'react-router-dom'
import { createTransaction } from '../../services/API/divvyRequests'

export default function Divvy() {
    //TODO: Make this a secure function after merging is all working
  //TODO: figure out possible transactionDelete from Transaction
  const { divvyId } = useParams()
  const divvyDetails = getDivvyDetails(divvyId)
  const divvyTitle = divvyDetails.divvyName
  const [editMode, setEditMode] = useState(false)
  const [transactionName, setTransactionName] = useState('')
  const [transactionType, setTransactionType] = useState('')
  const [transactionAmount, setTransactionAmount] = useState(0)
  const [transactionBreakdown, setTransactionBreakdown] = useState([])
  const switchEditMode = () => setEditMode(!editMode)
  return (
    <>
      <NavHeader
        title={divvyTitle}
        editMode={editMode}
        setEditMode={setEditMode}
        apiRequestOnSave={createTransaction}
        dataForpiRequestOnSave={{
          divvyId: divvyId,
          transactionName: transactionName,
          type: transactionType,
          amount: transactionAmount,
          breakdown: transactionBreakdown,
        }}
      />
      <Flex direction='column'>
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
              <DivvyDetail />
            </Tabs.Content>
            <Tabs.Content value='balances'>
              <DivvyBalances switchEditMode={switchEditMode}/>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
        {
          //Make a new Transaction, isUpdate is false 
          editMode &&
          <Transaction 
            transactionName={transactionName}
            setTransactionName={setTransactionName}
            transactionType={transactionType}
            setTransactionType={setTransactionType}
            transactionAmount={transactionAmount}
            setTransactionAmount={setTransactionAmount}
            breakdown={transactionBreakdown}
            setTransactionBreakdown={setTransactionBreakdown}
            isUpdate={false}
            switchEditMode={switchEditMode}
          />
        }
      </Flex >
    </>
  )
}