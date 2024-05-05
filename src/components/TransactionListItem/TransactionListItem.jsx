import { Flex, Grid, Box, Text, Table, Link as RadixLink } from '@radix-ui/themes'
import { RefundIcon, ExpenseIcon, ReimbursementIcon } from '../Icons/Icons'
import { Link } from 'react-router-dom'

/**
 * Component to display detailed information for a transaction.
 * Includes logic for dynamic rendering based on transaction type.
 * @param {*} transactionType
 * @param {*} transactionName
 * @param {*} amount
 * @param {*} details
 * @param {*} paidBy
 * @param {*} date
 * @param {*} _id
 * @returns Makes a table row with all the relevant transaction details
 */
export default function TransactionListItem({
  transactionType,
  transactionName,
  amount,
  paidBy,
  details,
  date,
  _id
}) {
  let detailText = ''
  let TransactionIcon
  function getIcon() {
    if (transactionType === 'expense') {
      TransactionIcon = ExpenseIcon
      detailText = details.map(detail => detail.name).join(', ')
    }
    if (transactionType === 'refund') {
      TransactionIcon = RefundIcon
      detailText = details.map(detail => detail.name).join(', ')
    }
    if (transactionType === 'reimbursement') {
      TransactionIcon = ReimbursementIcon
      //there will only be one person in the breakdown
      detailText = `${details[0].name} reimbursed ${paidBy}`
    }
  }
  getIcon()

  
  function formatDate(date) {
    if (!date) {
      return ''
    }
<<<<<<< HEAD
    return date.toLocaleDateString("en-US", { month: "long", day: "2-digit" }) // Format the date to a more readable format
=======
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
>>>>>>> b4da9bba4055e568e404e482570006ce02d7676c
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
                  <Text size='2' color='gray'>{detailText}</Text>
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
