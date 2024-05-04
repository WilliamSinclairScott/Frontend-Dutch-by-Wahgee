import { useState } from 'react'
import { Flex, Tabs, Box, Text } from '@radix-ui/themes'
import NavHeader from '../../components/NavHeader/NavHeader'
import DivvyDetail from '../../components/DivvyDetail/DivvyDetail'
import DivvyBalances from '../../components/DivvyBalances/DivvyBalances'
import DivvyEdit from '../../components/DivvyEdit/DivvyEdit'
import { getUserId, getDivvyDetails } from '../../services/SessionStorage/fromSession'
import { updateDivvy } from '../../services/API/divvyRequests'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function Divvy() {
    //TODO: Make this a secure function after merging is all working
  //TODO: figure out possible transactionDelete from Transaction
  const { divvyId } = useParams()
  const divvyDetails = getDivvyDetails(divvyId)

  const [editMode, setEditMode] = useState(false)


  const [divvyName, setDivvyName] = useState(divvyDetails.divvyName)
  //Actual participant object
  const [participants, setParticipants] = useState(divvyDetails.participants)

  
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

  const debounceChange = (e) => {
    let delay
    clearTimeout(delay)
    delay = setTimeout(() => {
      console.log('debounced', e.target.value, e.target.id)
      //remove the old value and replace with the new value
      const updated = [...participants]
      updated[e.target.id].name = e.target.value
      setParticipants(updated)
    }, 1500)
  }

  return (
    <>
      <NavHeader title='Dutch' 
      editMode={editMode}
      setEditMode={setEditMode}
      apiRequestOnSave={updateDivvy}
      dataForapiRequestOnSave={{
        divvyName: divvyName,
        owner: getUserId(),
        participants: participants
      }}
      />
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
                    divvyName={divvyName}
                    setDivvyName={setDivvyName}
                    participants={participants}
                    setParticipants={setParticipants}
                    isUpdate={true}
                    deleteParticipant={deleteParticipant}
                    debounceChange={debounceChange}
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
      </>
      )
}