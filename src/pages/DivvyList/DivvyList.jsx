import { useState } from 'react'
import { Flex, Table, } from '@radix-ui/themes'
import NavHeader from '../../components/NavHeader/NavHeader'
import DivvyListItem from '../../components/DivvyListItem/DivvyListItem'
import { AddButton } from '../../components/AddButton/AddButton'
import { getDivvys, getUserDisplayName } from '../../services/SessionStorage/fromSession'
import DivvyEdit from '../../components/DivvyEdit/DivvyEdit'
import { createDivvy } from '../../services/API/divvyRequests'

export default function DivvyList() {
  //TODO: Make this a servuce function after merging is all working
  const userDisplayName = getUserDisplayName()
  const divvys = getDivvys()

  const [divvyName, setDivvyName] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [participants, setParticipants] = useState([userDisplayName])
  const switchEditMode = () => setEditMode(!editMode)

  const addParticipant = (e) => {
    //from the button to the input of the textfield
    const input = e.target.previousSibling.children[0].value
    participants.push(input)
    e.target.previousSibling.children[0].value = ''
    setParticipants(participants)
  }

  return (
    <>
      <NavHeader title='Dutch' 
      editMode={editMode}
      setEditMode={setEditMode}
      apiRequestOnSave={createDivvy}
      dataForapiRequestOnSave={{
        divvyId: '1234',
        divvyName: 'New Divvy',
        participants: ['John', 'Jane']
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
          addParticipant={addParticipant}
          isUpdate={false}/>
        }
      </Flex>
      {
        !editMode &&
        <AddButton action={switchEditMode} />
      }
    </>
  );
}


