import { Flex, Table, Box, TextField, Text } from '@radix-ui/themes'
import ParticipantEdit from '../ParticipantEdit/ParticipantEdit'
import ParticipantAdd from '../ParticipantAdd/ParticipantAdd'
//TODO: Map over participants prop (array of objects or maybe array of strings) to create ParticipantEdit components on the page
export default function DivvyEdit(
  { divvyName, setDivvyName, participants, 
    setParticipants, isUpdate = false, editDivvyInfo,
    deleteParticipant, debounceChange
  }
) {
  //TODO: Add logic to handle the case where the divvy is being updated, instead of created

  const addParticipant = (e) => {
    //from the button to the input of the textfield
    const input = e.target.previousSibling.children[0].value
    const updated = [...participants, input]
    e.target.previousSibling.children[0].value = ''
    setParticipants(updated)
  }

  //BUG: The participants prop is not remapping when aprticipant is added in participantAdd component
  console.log('participantNames', participants)
  
  return (
    <>
      <Flex direction='column'>
        <Text as="div" size="2" mt='4'>
          {isUpdate ? 'Update' : 'Create'} Divvy
        </Text>
        <label>
          <Text as="div" size="2" mt='4'>
            Divvy Title
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
          <Text as="div" size="2">Participants</Text>
          <Table.Root>
            <Table.Body>
              {participants.map((participant) => {
                return <ParticipantEdit
                        key={participants.indexOf(participant)}
                        indexOf={participants.indexOf(participant)}
                        participant={participant}
                        deleteParticipant={deleteParticipant}
                        debounceChange={debounceChange}
                        />
              })}
            </Table.Body>
          </Table.Root>
          <ParticipantAdd addParticipant={addParticipant}/>
        </Box>
      </Flex>
    </>
  )
}
