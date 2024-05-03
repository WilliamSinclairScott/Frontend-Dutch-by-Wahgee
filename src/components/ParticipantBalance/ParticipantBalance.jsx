import { Grid, Box, IconButton, Separator, Text } from '@radix-ui/themes'
import { ChevronRightIcon } from '@radix-ui/react-icons'


export default function ParticipantBalance({ 
  participantName = 'InputParticipantName', 
  owesWho = [], balance = 'InputBalance' })
  {
    if (owesWho.length)console.log(owesWho)
    let balanceColor = 'black'
    let owesWhoText = ''
    let hideArrowButton = false
    //1. Participant owes money
    if (balance < 0) {
      balanceColor = 'red'
      for (let owe of owesWho){
        console.log(owe)
        owesWhoText += ` Owes ${owe.name} $${owe.amount},`
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
          <Text size='6' color={balanceColor}>{balance}</Text>
        </Box>
        <Box align='end'>
          {
            hideArrowButton &&
            <IconButton variant='ghost'>
              <ChevronRightIcon height='36px' width='36px'/>
            </IconButton>
          }
        </Box>
      </Grid>
      <Separator my="1" size="4" />

    </>

  )
}
