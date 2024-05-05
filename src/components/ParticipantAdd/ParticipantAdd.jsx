import { TextField } from '@radix-ui/themes';
// branch component add purposes only :)
// Component to add a new participant input field.
export default function ParticipantAdd() {
  return (
    <TextField.Root placeholder='New Participant' type='text' adjustresize='scroll' mt='3' size='3' >
    </TextField.Root>
  )
}
