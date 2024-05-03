import { Flex, Grid, Box, Text, Table, Link as RadixLink } from '@radix-ui/themes'
import { RefundIcon, ExpenseIcon, ReimbursementIcon } from '../Icons/Icons'
import { Link } from 'react-router-dom'

/**
 * 
 * @param {*} transactionType
 * @param {*} transactionName
 * @param {*} amount
 * @param {*} details
 * @param {*} date
 * @param {*} _id
 * @returns Makes a table row with all the relevant transaction details
 */
export default function TransactionListItem({
  transactionType,
  transactionName,
  amount,
  details = 'Logic needed for this field',
  date = new Date(),
  _id
}) {
  let TransactionIcon
  function getIcon() {
    if (transactionType === 'expense') {
      TransactionIcon = ExpenseIcon
    }
    if (transactionType === 'refund') {
      TransactionIcon = RefundIcon
    }
    if (transactionType === 'reimbursement') {
      TransactionIcon = ReimbursementIcon
    }
  }
  getIcon()

  
  function formatDate(date) {
    if (!date) {
      return ''
    }
    return date.toLocaleDateString("en-US", { month: "long", day: "2-digit" })
  }
  formatDate(date)
  return (
    <>
      <Table.Row>
        <Table.Cell>
          <Grid asChild columns='3' rows='2' gapX='3' style={{ gridTemplateColumns: 'minmax(auto, auto) 1fr minmax(auto, auto)', gridTemplateRows: 'minmax(auto, auto)' }}>
            <RadixLink asChild underline='none'>
              <Link to={`./${_id}`}>
                <Flex gridRowStart='1' gridRowEnd='3' align='center' justify='center'>
                  <TransactionIcon color='white' />
                </Flex>
                <Box>
                  <Text size='4'>{transactionName}</Text>
                </Box>
                <Box align='end' justify='end'>
                  <Text size='4'>${amount}</Text>
                </Box>
                <Box>
                  <Text size='2' color='gray'>{details}</Text>
                </Box>
                <Box align='end'>
                  <Text size='2' color='gray'>{formatDate(date)}</Text>
                </Box>
              </Link>
            </RadixLink>
          </Grid>
        </Table.Cell>
      </Table.Row>
    </>

  )
}
