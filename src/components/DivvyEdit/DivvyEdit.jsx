import { useState } from 'react'
import { Flex, Table, Box, TextField, Text } from '@radix-ui/themes'
import ParticipantEdit from '../ParticipantEdit/ParticipantEdit'
import ParticipantAdd from '../ParticipantAdd/ParticipantAdd'
import DutchAlertDialog from '../DutchAlertDialog/DutchAlertDialog'
import { deleteDivvy } from '../../services/API/divvyRequests'
//TODO: Map over participants prop (array of objects or maybe array of strings) to create ParticipantEdit components on the page
export default function DivvyEdit(
  { divvyName, divvyId, setDivvyName, participants,
    setParticipants, isUpdate = false,
    deleteParticipant, debounceChange
  }
) {
  //change participants to just an array of strings, still keeping index order in mind for later implementation
  const participantNames = participants.map(participant => participant.participantName ? participant.participantName : participant)
  console.log('participants', participants)
  console.log('participantNames', participantNames)
  const [newParticipant, setNewParticipant] = useState('')
  const handleInputChange = (e) => {
    setNewParticipant(e.target.value)
  }
  const addParticipant = (e) => {
    //from the button to the input of the textfield
    const input = e.target.previousSibling.children[0].value
    const updated = [...participants, input]
    setNewParticipant('')
    setParticipants(updated)
  }

  //BUG: The participants prop is not remapping when aprticipant is added in participantAdd component

  return (
    <>
      <Flex direction='column'>
        <label>
          <Text as="div" size="3">
            Title
          </Text>
          <TextField.Root
            placeholder="Divvy Title"
            type='text'
            size='3'
            mt='3'
            defaultValue={divvyName}
            onChange={(e) => {
              setDivvyName(e.target.value)
            }}
          />
        </label>
        <Box mt='4'>
          <Text as="div" size="3">Participants</Text>
          <Table.Root>
            <Table.Body>
              {participantNames.map((participant) => {
                return <ParticipantEdit
                  key={participantNames.indexOf(participant)}
                  indexOf={participantNames.indexOf(participant)}
                  participant={participant}
                  deleteParticipant={deleteParticipant}
                  debounceChange={debounceChange}
                />
              })}
            </Table.Body>
          </Table.Root>
          <ParticipantAdd
            addParticipant={addParticipant}
            newParticipant={newParticipant}
            handleInputChange={handleInputChange}
          />
        </Box>
        {isUpdate && (
          <DutchAlertDialog
            triggerButtonText={`Delete ${divvyName}`}
            triggerButtonVariant='outline'
            title={`Delete ${divvyName}`}
            message='Are you sure you want to delete this Divvy? This action cannot be undone.'
            cancelButtonText='Cancel'
            actionButtonText='Delete'
            action={() => deleteDivvy(divvyId)}
          />
        )}
      </Flex>
    </>
  )
}
