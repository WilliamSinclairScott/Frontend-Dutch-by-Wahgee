import { Flex, Grid, Box, Separator, Text } from '@radix-ui/themes'
import { RefundIcon, ExpenseIcon, ReimbursementIcon } from '../Icons/Icons'


export default function TransactionListItem({ type = 'Expense', transactionName = 'Expense using default Props', amount = '$0', details = 'pass details in here', date = new Date() }) {
  let TransactionIcon
  function getIcon() {
    if (type === 'Expense') {
      TransactionIcon = ExpenseIcon
    }
    if (type === 'Refund') {
      TransactionIcon = RefundIcon
    }
    if (type === 'Reimbursement') {
      TransactionIcon = RefundIcon
    }
  }
  getIcon()


  function formatDate(date) {
    return date.toLocaleDateString("en-US", { month: "long", day: "2-digit" })
  }
  formatDate(date)
  return (
    <>
      <Grid columns='3' rows='2' gapX='3' style={{ gridTemplateColumns: 'minmax(auto, auto) 1fr minmax(auto, auto)', gridTemplateRows: 'minmax(auto, auto)' }}>
        <Flex gridRowStart='1' gridRowEnd='3' align='center' justify='center'>
          <ExpenseIcon />
        </Flex>
        <Box>
          <Text size='4'>2 Coronas</Text>
        </Box>
        <Box align='end'>
          <Text size='4'>$16</Text>
        </Box>
        <Box>
          <Text size='2' color='gray'>Ian, Josh</Text>
        </Box>
        <Box align='end'>
          <Text size='2' color='gray'>April 26</Text>
        </Box>
      </Grid>
      <Separator my="1" size="4" />

      <Grid columns='3' rows='2' gapX='3' style={{ gridTemplateColumns: 'minmax(auto, auto) 1fr minmax(auto, auto)', gridTemplateRows: 'minmax(auto, auto)' }}>
        <Flex gridRowStart='1' gridRowEnd='3' align='center' justify='center'>
          <ExpenseIcon />
        </Flex>
        <Box>
          <Text size='4'>Guinness</Text>
        </Box>
        <Box align='end'>
          <Text size='4'>$8</Text>
        </Box>
        <Box>
          <Text size='2' color='gray'>Will</Text>
        </Box>
        <Box align='end'>
          <Text size='2' color='gray'>April 26</Text>
        </Box>
      </Grid>
      <Separator my="1" size="4" />

      <Grid columns='3' rows='2' gapX='3' style={{ gridTemplateColumns: 'minmax(auto, auto) 1fr minmax(auto, auto)', gridTemplateRows: 'minmax(auto, auto)' }}>
        <Flex gridRowStart='1' gridRowEnd='3' align='center' justify='center'>
          <ExpenseIcon />
        </Flex>
        <Box>
          <Text size='4'>Whiskey</Text>
        </Box>
        <Box align='end'>
          <Text size='4'>$12</Text>
        </Box>
        <Box>
          <Text size='2' color='gray'>Aris</Text>
        </Box>
        <Box align='end'>
          <Text size='2' color='gray'>April 26</Text>
        </Box>
      </Grid>
      <Separator my="1" size="4" />

      <Grid columns='3' rows='2' gapX='3' style={{ gridTemplateColumns: 'minmax(auto, auto) 1fr minmax(auto, auto)', gridTemplateRows: 'minmax(auto, auto)' }}>
        <Flex gridRowStart='1' gridRowEnd='3' align='center' justify='center'>
          <ExpenseIcon />
        </Flex>
        <Box>
          <Text size='4'>Nachos</Text>
        </Box>
        <Box align='end'>
          <Text size='4'>$16</Text>
        </Box>
        <Box>
          <Text size='2' color='gray'>Aris, Josh, Ian, Will</Text>
        </Box>
        <Box align='end'>
          <Text size='2' color='gray'>April 26</Text>
        </Box>
      </Grid>
      <Separator my="1" size="4" />

      <Grid columns='3' rows='2' gapX='3' style={{ gridTemplateColumns: 'minmax(auto, auto) 1fr minmax(auto, auto)', gridTemplateRows: 'minmax(auto, auto)' }}>
        <Flex gridRowStart='1' gridRowEnd='3' align='center' justify='center'>
          <RefundIcon />
        </Flex>
        <Box>
          <Text size='4'>Soggy Nachos</Text>
        </Box>
        <Box align='end'>
          <Text size='4'>+$16</Text>
        </Box>
        <Box>
          <Text size='2' color='gray'>Aris, Josh, Ian, Will</Text>
        </Box>
        <Box align='end'>
          <Text size='2' color='gray'>April 26</Text>
        </Box>
      </Grid>
      <Separator my="1" size="4" />

      <Grid columns='3' rows='2' gapX='3' style={{ gridTemplateColumns: 'minmax(auto, auto) 1fr minmax(auto, auto)', gridTemplateRows: 'minmax(auto, auto)' }}>
        <Flex gridRowStart='1' gridRowEnd='3' align='center' justify='center'>
          <ReimbursementIcon />
        </Flex>
        <Box>
          <Text size='4'>Cash</Text>
        </Box>
        <Box align='end'>
          <Text size='4'>$8</Text>
        </Box>
        <Box>
          <Text size='2' color='gray'>Josh reimbursed Ian</Text>
        </Box>
        <Box align='end'>
          <Text size='2' color='gray'>April 26</Text>
        </Box>
      </Grid>
      <Separator my="1" size="4" />

      <Grid columns='3' rows='2' gapX='3' style={{ gridTemplateColumns: 'minmax(auto, auto) 1fr minmax(auto, auto)', gridTemplateRows: 'minmax(auto, auto)' }}>
        <Flex gridRowStart='1' gridRowEnd='3' align='center' justify='center'>
          <TransactionIcon />
        </Flex>
        <Box>
          <Text size='4'>{transactionName}</Text>
        </Box>
        <Box align='end' justify='end'>
          <Text size='4'>{amount}</Text>
        </Box>
        <Box>
          <Text size='2' color='gray'>{details}</Text>
        </Box>
        <Box align='end'>
          <Text size='2' color='gray'>{formatDate(date)}</Text>
        </Box>
      </Grid>
      <Separator my="1" size="4" />

    </>

  )
}
