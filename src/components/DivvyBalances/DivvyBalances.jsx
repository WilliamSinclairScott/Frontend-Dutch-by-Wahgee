import { Flex } from '@radix-ui/themes'
import ParticipantBalance from '../ParticipantBalance/ParticipantBalance'
import { AddButton } from '../AddButton/AddButton'
import { getDivvyDetails } from '../../services/API/apiHelpers'
import { useParams } from 'react-router-dom'
import { calculateBalance } from '../../services/Logic/balanceCalculator.js'
export default function DivvyBalances() {

  const { divvyId } = useParams()
  const divvyDetails = getDivvyDetails(divvyId)
  const balances = calculateBalance(divvyDetails)
  console.log(balances)
  return (
    <>
      <Flex direction='column' justify='start'>
        {
          balances.map(balance => (
            <ParticipantBalance
              key={balance.participantId}
              participantName={balance.name}
              owesWho={balance.owes}
              balance={balance.balance}
            />
          ))
        }
      </Flex>
      <AddButton />
    </>
  )
}
