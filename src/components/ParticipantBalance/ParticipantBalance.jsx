import { Grid, Box, IconButton, Separator, Text } from '@radix-ui/themes'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { createParticipantReimbursementRedirect } from '../../services/Logic/buttonRerouteLogic'

//TODO: Pass information through createParticipantReimbursementRedirect function

export default function ParticipantBalance({ 
  participantName = 'InputParticipantName', 
  owesWho = [], balance = 'InputBalance' })
  {
    let balanceColor = 'black'
    let owesWhoText = ''
    let hideArrowButton = false
    //1. Participant owes money
    if (balance < 0) {
      balanceColor = 'red'
      for (let owe of owesWho){
        owesWhoText += ` owes ${owe.name} $${owe.amount},`
      }
      //remove last comma
      owesWhoText = owesWhoText.slice(0, -1)
      hideArrowButton = true
    }
    //2. Participant is owed money
    if (balance > 0) {
      //do some stuff
      balanceColor = 'green'
    }
    //3. Participant has no balance
    if (balance === 0) {
      //do some stuff
      balanceColor = 'gray'
    }
    return (
    <>
      <Grid columns='3' rows='1' gapX='3' align='center' style={{ gridTemplateColumns: '1fr minmax(auto, auto) 36px' }}>
      <Box p='2'>
          <Text size='6'>{participantName}</Text>
          <Text size='4' color='gray'>{owesWhoText}</Text>

        </Box>
        <Box align='end'>
        <Text size='6' color={balanceColor}>
  {`${balance < 0 ? '-' : ''}$${Math.abs(balance).toFixed(2)}`}
</Text>

        </Box>
        <Box align='end'>
          {
            hideArrowButton &&
            <IconButton variant='ghost'>
              <ChevronRightIcon height='36px' width='36px' onClick={createParticipantReimbursementRedirect}/>
            </IconButton>
          }
        </Box>
      </Grid>
      <Separator my="1" size="4" />

    </>

  )
}
