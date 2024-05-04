import { Flex } from '@radix-ui/themes'
import ParticipantBalance from '../ParticipantBalance/ParticipantBalance'
import { getDivvyDetails } from '../../services/SessionStorage/fromSession'
import { useParams } from 'react-router-dom'
import { calculateBalance } from '../../services/Logic/balanceCalculator.js'
export default function DivvyBalances() {

  const { divvyId } = useParams()
  const divvyDetails = getDivvyDetails(divvyId)
  const balances = calculateBalance(divvyDetails)

  return (
    <>
      <Flex direction='column' justify='start'>
        {
          balances.map(balance => (
            <ParticipantBalance
              key={balance._id}
              participantName={balance.name}
              owesWho={balance.owes}
              balance={balance.balance}
            />
          ))
        }
      </Flex>
    </>
  )
}
