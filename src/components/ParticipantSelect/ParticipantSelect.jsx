import { Flex, Text, Table } from '@radix-ui/themes'
import ParticipantAdd from '../ParticipantAdd/ParticipantAdd'
import ParticipantSelectRow from '../ParticipantSelectRow/ParticipantSelectRow'
//TODO: If participant exists in breakdown calculate amount*percentage
//TODO: useState to recalculate percentage on checkbox change

export default function ParticipantSelect({ 
  divvyparticipants, 
  activeParticipants, 
  setActiveParticipants,
  handleActiveParticipantsChange,
  portion

}) {
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
        <ParticipantAdd />
      </Flex>
    </>
  )
}