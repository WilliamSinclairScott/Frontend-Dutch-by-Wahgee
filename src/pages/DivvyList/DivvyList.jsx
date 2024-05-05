import { useState } from 'react'
import { Flex, Table, } from '@radix-ui/themes'
import NavHeader from '../../components/NavHeader/NavHeader'
import DivvyListItem from '../../components/DivvyListItem/DivvyListItem'
import { AddButton } from '../../components/AddButton/AddButton'
import { getDivvys, getUserDisplayName, getUserId } from '../../services/SessionStorage/fromSession'
import DivvyEdit from '../../components/DivvyEdit/DivvyEdit'
import { createDivvy } from '../../services/API/divvyRequests'

export default function DivvyList() {
  //TODO: Make this a servuce function after merging is all working
  //TODO: figure out possible divvyDlete from divvy edit
  const userDisplayName = getUserDisplayName()
  const divvys = getDivvys()
  const [divvyName, setDivvyName] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [participants, setParticipants] = useState([userDisplayName])
  const switchEditMode = () => setEditMode(!editMode)

  const deleteParticipant = (e) => {
    const updated = [...participants]
    if (e.target.id) {
      console.log('delete', updated[e.target.id])
      updated.splice(e.target.id, 1)
      setParticipants(updated)
    }
  }

  const debounceChange = (e) => {
    const updated = [...participants]
    updated[e.target.id] = e.target.value
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
      <NavHeader title={editMode ? 'New Divvy' : 'Dutch'} 
      editMode={editMode}
      setEditMode={setEditMode}
      apiRequestOnSave={createDivvy}
      dataForapiRequestOnSave={{
        divvyName: divvyName,
        owner: getUserId(),
        participants: participants
      }}
      />
      <Flex direction='column' gap='4' mt='5' >
        <Table.Root size='3'>
          <Table.Body>
            { !editMode &&
              divvys.map(divvy => (
                <DivvyListItem
                  divvyName={divvy.name}
                  _id={divvy.id}
                  key={divvy.id} />
              ))
            }
          </Table.Body>
        </Table.Root>
        {
          //Make a new Divvy, isUpdate is false
          editMode &&
          <DivvyEdit
          divvyName={divvyName}
          setDivvyName={setDivvyName}
          participants={participants}
          setParticipants={setParticipants}
          isUpdate={false}
          deleteParticipant={deleteParticipant}
          debounceChange={debounceChange}
          />
        }
      </Flex>
      {
        !editMode &&
        <AddButton action={switchEditMode} />
      }
    </>
  );
}


