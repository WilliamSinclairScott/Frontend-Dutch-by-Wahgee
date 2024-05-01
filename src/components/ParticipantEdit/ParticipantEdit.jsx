import { Grid, Box, IconButton, Separator, TextField } from '@radix-ui/themes'
import { Cross1Icon } from '@radix-ui/react-icons'


export default function ParticipantEdit({ participantName }) {
  return (
    <>
      <Grid columns='2' rows='1' gapX='3' align='center' style={{ gridTemplateColumns: '1fr minmax(auto, auto) 36px' }}>
        <Box p='2' pl='6'>
          <TextField.Root size='7' placeholder='New Participant'>Ian</TextField.Root>
        </Box>
        <Box align='end'>
          <IconButton variant='ghost'>
          <Cross1Icon height='36px' width='36px'/>
          </IconButton>
        </Box>
      </Grid>
      <Separator my="1" size="4" />

      <Grid columns='2' rows='1' gapX='3' align='center' style={{ gridTemplateColumns: '1fr minmax(auto, auto) 36px' }}>
        <Box p='2' pl='6'>
          <TextField.Root size='7' placeholder='New Participant'>{participantName}</TextField.Root>
        </Box>
        <Box align='end'>
          <IconButton variant='ghost'>
          <Cross1Icon height='36px' width='36px'/>
          </IconButton>
        </Box>
      </Grid>
      <Separator my="1" size="4" />
    </>

  )
}
