import { Flex, Table, Box, Button, TextField, Text } from '@radix-ui/themes'
import ParticipantEdit from '../ParticipantEdit/ParticipantEdit'
import ParticipantAdd from '../ParticipantAdd/ParticipantAdd'
//TODO: Map over participants prop (array of objects or maybe array of strings) to create ParticipantEdit components on the page

export default function DivvyEdit( participants ) {
  
  console.log(participants)
  return (
    <>
      <Flex justify='between' align='center'>
        <Button variant='outline'>Cancel</Button>
        <Button>Save</Button>
      </Flex>
      <Flex direction='column'>
        <label>
          <Text as="div" size="2" mt='4' >
            Divvy Title
          </Text>
          <TextField.Root
            placeholder="Divvy Title"
            type='text'
            size='3'
            mt='3'
            defaultValue={user}
          />
        </label>
        <Box mt='4'>
          <Text as="div" size="2">Participants</Text>
          <Table.Root>
            <Table.Body>
              { participants.map(participant => {
                return <ParticipantEdit participantName={participant.name} key={participant.id} />
              })
              }
            </Table.Body>
          </Table.Root>
          <ParticipantAdd />
        </Box>
      </Flex>
    </>
  )
}
