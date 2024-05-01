import { Card, Flex, Box, Button, Text } from '@radix-ui/themes'
import ParticipantEdit from '../ParticipantEdit/ParticipantEdit'

export default function DivvyEdit() {
  return (
    <>
      <Card>
        <Flex direction='column' justify='start'>
          <Button align='start'>Done</Button>
          <Box>
            <Text size='6'>Participants</Text>
          </Box>
          <ParticipantEdit />
        </Flex>
      </Card>
    </>
  )
}
