import { useState } from 'react'
import { Flex, Text, Table } from '@radix-ui/themes'
import ParticipantAdd from '../ParticipantAdd/ParticipantAdd'
import ParticipantSelectRow from '../ParticipantSelectRow/ParticipantSelectRow'
//TODO: If participant exists in breakdown calculate amount*percentage
//TODO: useState to recalculate percentage on checkbox change

export default function ParticipantSelect({
  divvyparticipants, setDivvyParticipants,
  activeParticipants, setActiveParticipants,
  handleActiveParticipantsChange, portion
}) {
  const participantNames = divvyparticipants.map(participant => participant.participantName ? participant.participantName : participant)
  //console.log('activeParticipants', activeParticipants)
  // console.log('divvyparticipants', divvyparticipants)
  // console.log('participantNames', participantNames)
  const [newParticipant, setNewParticipant] = useState('')
  const handleInputChange = (e) => {
    setNewParticipant(e.target.value)
  }
  const addParticipant = (e) => {
    //from the button to the input of the textfield
    const input = e.target.previousSibling.children[0].value
    const updated = [...divvyparticipants, input]
    setNewParticipant('')
    setDivvyParticipants(updated)
  }


  return (
    <>
      <Flex direction='column' mt='9'>
        <Text size='5' ml='2' mb='2'>For:</Text>
        <Table.Root size='3'>
          <Table.Body>
            {divvyparticipants.map((participant) => (
              <ParticipantSelectRow
                key={participant._id}
                participant={participant}
                activeParticipants={activeParticipants}
                portion={portion}
                handleActiveParticipantsChange={handleActiveParticipantsChange} />
            ))}
          </Table.Body>
        </Table.Root>
        <ParticipantAdd
          addParticipant={addParticipant}
          newParticipant={newParticipant}
          handleInputChange={handleInputChange}
        />
      </Flex>
    </>
  )
}