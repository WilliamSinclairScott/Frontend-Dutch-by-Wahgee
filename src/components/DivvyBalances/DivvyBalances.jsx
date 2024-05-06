import { Flex, Text } from '@radix-ui/themes'
import ParticipantBalance from '../ParticipantBalance/ParticipantBalance'
import { getDivvyDetails } from '../../services/SessionStorage/fromSession'
import { useParams } from 'react-router-dom'
import { calculateBalance } from '../../services/Logic/balanceCalculator.js'
export default function DivvyBalances() {

  const { divvyId } = useParams()
  const divvyDetails = getDivvyDetails(divvyId)
  let balances = []
  try {
    balances = calculateBalance(divvyDetails)
    return (
      <>
        <Flex direction='column' justify='start'>
          {
            balances.map((balance, index) => (
              <ParticipantBalance
                key={index}
                participantName={balance.name}
                owesWho={balance.owes}
                balance={balance.balance}
              />
            ))
          }
        </Flex>
      </>
    )
  } catch (error) {
    return (
      <Flex mt='8' direction='column' justify='center' align='center'>
        <Text>Error calculating balances, check back soon.</Text>
      </Flex>
    )
  }
}