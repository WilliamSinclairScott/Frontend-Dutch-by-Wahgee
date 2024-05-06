import { Grid, Button, TextField } from '@radix-ui/themes';
// branch component add purposes only :)
export default function ParticipantAdd({ addParticipant, newParticipant, handleInputChange }) {

  //on subit (enter or whatever) add the participant to the list

  return (
    <Grid mt='3' gap='3' columns='2' style={{ gridTemplateColumns: '1fr minmax(auto, auto)' }} >
      <TextField.Root
        // id='participantAdd'
        placeholder='New Participant'
        type='text'
        adjustresize='scroll'
        size='3'
        value={newParticipant}
        onChange={handleInputChange}
      />
      {newParticipant.length > 0 && (
        <Button size='3' onClick={addParticipant}>Add</Button>
      )}
    </Grid>
  )
}