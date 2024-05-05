import { useState } from 'react'
import { Table, Checkbox } from '@radix-ui/themes'
//TODO: If participant exists in breakdown calculate amount*percentage
//TODO: useState to recalculate percentage on checkbox change

export default function ParticipantSelectRow(
  { participant, activeParticipants, portion, handleActiveParticipantsChange }
) {
  const dataState = activeParticipants?.includes(participant.participantName ? participant.participantName : participant)
  const [checkedStatus, setCheckedStatus] = useState(dataState ? dataState : false)
  const handleCheckedStatusChange = () => {
    setCheckedStatus(!checkedStatus)
  }
  return (
    <>
      <Table.Row align='center' key={participant._id}>
        <Table.Cell justify='start' width='1%'>
          <Checkbox
            size='3'
            checked={checkedStatus}
            onClick={handleActiveParticipantsChange}
            onCheckedChange={handleCheckedStatusChange}
          />
        </Table.Cell>
        <Table.Cell justify='start' pl='2'>
          {participant.participantName ? participant.participantName : participant}
        </Table.Cell>
        <Table.Cell justify='end' width='1%'>{
          activeParticipants?.includes(participant.participantName ? participant.participantName : participant) ?
            `$${portion.toFixed(2)}` : ``
        }
        </Table.Cell>
      </Table.Row>
    </>
  )
}


