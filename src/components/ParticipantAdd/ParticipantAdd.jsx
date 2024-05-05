import { Flex, Button, TextField } from '@radix-ui/themes';
// branch component add purposes only :)
export default function ParticipantAdd({ addParticipant }) {
  //on subit (enter or whatever) add the participant to the list

  return (
    <Flex>
      <TextField.Root placeholder='New Participant' type='text' adjustresize='scroll' mt='3' size='3' >
    </TextField.Root>
    <Button onClick={addParticipant}>+</Button>
    </Flex>
    
    
  )
}
