import { Flex, Table, Box, Button, TextField, Text } from '@radix-ui/themes'
import ParticipantEdit from '../ParticipantEdit/ParticipantEdit'
import ParticipantAdd from '../ParticipantAdd/ParticipantAdd'
import { getUserDisplayName } from '../../services/SessionStorage/fromSession'
//TODO: Map over participants prop (array of objects or maybe array of strings) to create ParticipantEdit components on the page
// Component to edit divvy details, including updating title and participants.
export default function DivvyEdit({ divvyTitle, participants }) {
  return (
    <>
      <Flex justify='between' align='center'>
        <Button variant='outline'>Cancel</Button>
        <Dialog.Title mb='0'>Edit Divvy</Dialog.Title>
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
            defaultValue={divvyTitle}
          />
        </label>
        <Box mt='4'>
          <Text as="div" size="2">Participants</Text>
          <Table.Root>
            <Table.Body>
              <ParticipantEdit participantName='Aris' />
              <ParticipantEdit participantName='Josh' />
              <ParticipantEdit participantName='Ian' />
              <ParticipantEdit participantName='Will' />
            </Table.Body>
            import { Dialog, Flex, Table, Box, Button, TextField, Text } from '@radix-ui/themes'
import ParticipantEdit from '../ParticipantEdit/ParticipantEdit'
import ParticipantAdd from '../ParticipantAdd/ParticipantAdd'

<<<<<<< HEAD
//TODO: Map over participants prop (array of objects or maybe array of strings) to create ParticipantEdit components on the page
// Component to edit divvy details, including updating title and participants.
export default function DivvyEdit({ divvyTitle, participants }) {
=======
export default function DivvyEdit() {
  //get userName for session storage
  const user = getUserDisplayName()
  console.log(user)
>>>>>>> b4da9bba4055e568e404e482570006ce02d7676c
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
              <ParticipantEdit participantName={user} />
            </Table.Body>
          </Table.Root>
          <ParticipantAdd />
        </Box>
      </Flex>
    </>
  )
}