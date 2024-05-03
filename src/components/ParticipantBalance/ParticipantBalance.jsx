import { Grid, Box, IconButton, Separator, Text } from '@radix-ui/themes'
import { ChevronRightIcon } from '@radix-ui/react-icons'


//TODO: Wire up right arrow icon to open a New Transaction prefilled with Reimbursment type and the other props
// Component to display a participant's balance and who they owe.
export default function ParticipantBalance({ 
  participantName = 'Balance w/ default props', owesWho = 'Participant', 
  balance = '$1 ' }) {
  return (
    <>
      <Grid columns='3' rows='1' align='center' p='1' style={{ gridTemplateColumns: '1fr minmax(auto, auto) 36px' }}>
        <Box pr='1'>
          <Text size='6'>Aris</Text>
          <Text size='4' color='gray'> owes Ian</Text>

        </Box>
        <Box align='end'>
          <Text size='6' color='red'>$12</Text>
        </Box>
        <Box align='end'>
          <IconButton size='1' variant='ghost'>
          <ChevronRightIcon height='36px' width='36px'/>
          </IconButton>
        </Box>
      </Grid>
      <Separator my="1" size="4" />

      <Grid columns='3' rows='1' gapX='3' align='center' style={{ gridTemplateColumns: '1fr minmax(auto, auto) 36px' }}>
      <Box p='2'>
          <Text size='6'>Josh</Text>
          <Text size='4' color='gray'></Text>

        </Box>
        <Box align='end'>
          <Text size='6' color='gray'>$0</Text>
        </Box>
        <Box align='end'>
          <IconButton variant='ghost'>
          {/* <ChevronRightIcon height='36px' width='36px'/> */}
          </IconButton>
        </Box>
      </Grid>
      <Separator my="1" size="4" />

      <Grid columns='3' rows='1' gapX='3' align='center' style={{ gridTemplateColumns: '1fr minmax(auto, auto) 36px' }}>
      <Box p='2'>
          <Text size='6'>Ian</Text>
          <Text size='4' color='gray'></Text>

        </Box>
        <Box align='end'>
          <Text size='6' color='green'>+$20</Text>
        </Box>
        <Box align='end'>
          <IconButton variant='ghost'>
          {/* <ChevronRightIcon height='36px' width='36px'/> */}
          </IconButton>
        </Box>
      </Grid>
      <Separator my="1" size="4" />

      <Grid columns='3' rows='1' gapX='3' align='center' style={{ gridTemplateColumns: '1fr minmax(auto, auto) 36px' }}>
      <Box p='2'>
          <Text size='6'>Will</Text>
          <Text size='4' color='gray'> owes Ian</Text>

        </Box>
        <Box align='end'>
          <Text size='6' color='red'>$8</Text>
        </Box>
        <Box align='end'>
          <IconButton variant='ghost'>
          <ChevronRightIcon height='36px' width='36px'/>
          </IconButton>
        </Box>
      </Grid>
      <Separator my="1" size="4" />

      <Grid columns='3' rows='1' gapX='3' align='center' style={{ gridTemplateColumns: '1fr minmax(auto, auto) 36px' }}>
      <Box p='2'>
          <Text size='6'>{participantName}</Text>
          <Text size='4' color='gray'> owes {owesWho}</Text>

        </Box>
        <Box align='end'>
          <Text size='6' color='red'>{balance}</Text>
        </Box>
        <Box align='end'>
          <IconButton variant='ghost'>
          <ChevronRightIcon height='36px' width='36px'/>
          </IconButton>
        </Box>
      </Grid>
      <Separator my="1" size="4" />

    </>

  )
}
