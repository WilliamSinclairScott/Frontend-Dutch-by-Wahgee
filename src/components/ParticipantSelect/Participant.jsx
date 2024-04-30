import { Table, IconButton } from '@radix-ui/themes';
import { BoxIcon } from '@radix-ui/react-icons'

export default function ParticipantSelect() {
  return (
<>
    <Table.Row>
    <Table.Cell justify='start'>
              <IconButton variant="ghost">
                <BoxIcon width="24" height="24"  />
              </IconButton>
            </Table.Cell>
            <Table.Cell justify='start'>Aris</Table.Cell>
            <Table.Cell justify='end'>Amount</Table.Cell>
          </Table.Row>
          <Table.Row>
    <Table.Cell justify='start'>
              <IconButton variant="ghost">
                <BoxIcon width="24" height="24"  />
              </IconButton>
            </Table.Cell>
            <Table.Cell justify='start'>Josh</Table.Cell>
            <Table.Cell justify='end'>Amount</Table.Cell>
          </Table.Row>
          <Table.Row>
    <Table.Cell justify='start'>
              <IconButton variant="ghost">
                <BoxIcon width="24" height="24"  />
              </IconButton>
            </Table.Cell>
            <Table.Cell justify='start'>Ian</Table.Cell>
            <Table.Cell justify='end'>Amount</Table.Cell>
          </Table.Row>
          <Table.Row>
    <Table.Cell justify='start'>
              <IconButton variant="ghost">
                <BoxIcon width="24" height="24"  />
              </IconButton>
            </Table.Cell>
            <Table.Cell justify='start'>Will</Table.Cell>
            <Table.Cell justify='end'>Amount</Table.Cell>
          </Table.Row>
          </>
  )
}


