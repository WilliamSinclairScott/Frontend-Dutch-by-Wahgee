import { useState } from 'react'
import { Flex, Text, Table } from '@radix-ui/themes'
import ParticipantAdd from '../ParticipantAdd/ParticipantAdd'
import ParticipantSelectRow from '../ParticipantSelectRow/ParticipantSelectRow'
//TODO: If participant exists in breakdown calculate amount*percentage
//TODO: useState to recalculate percentage on checkbox change

export default function ParticipantSelect({ transaction, divvyparticipants, currentCost }) {
  const startingActiveParticipants = transaction.breakdown.map(participant => participant.name)
  const [activeParticipants, setActiveParticipants] = useState(startingActiveParticipants)
  const [percentage, setPercentage] = useState(1 / activeParticipants.length)
  const handleActiveParticipantsChange = (e) => {
    const participantName = e.target.parentElement.nextSibling.textContent.trim();
    console.log(participantName);
    if (activeParticipants.includes(participantName)) {
      activeParticipants.splice(activeParticipants.indexOf(participantName), 1)
    } else {
      activeParticipants.push(participantName)
    }
    console.log(activeParticipants);
    setPercentage(1 / activeParticipants.length)
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
                portion={percentage*currentCost}
                handleActiveParticipantsChange={handleActiveParticipantsChange} />
            ))}
          </Table.Body>
        </Table.Root>
        <ParticipantAdd />
      </Flex>
    </>
  )
}