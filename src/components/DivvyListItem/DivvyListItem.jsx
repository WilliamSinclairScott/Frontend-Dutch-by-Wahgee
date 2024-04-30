import { Table, IconButton } from '@radix-ui/themes';
import { ChevronRightIcon } from '@radix-ui/react-icons'

export default function DivvyListItem() {
  return (
    <>
    <Table.Row>
            <Table.Cell>Friday Drinks</Table.Cell>
            <Table.Cell justify='end'>
              <IconButton variant="ghost">
                <ChevronRightIcon width="24" height="24"  />
              </IconButton>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ramen</Table.Cell>
            <Table.Cell justify='end'>
              <IconButton variant="ghost">
                <ChevronRightIcon width="24" height="24" />
              </IconButton>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Upstate Weekend</Table.Cell>
            <Table.Cell justify='end'>
              <IconButton variant="ghost">
                <ChevronRightIcon width="24" height="24" />
              </IconButton>
            </Table.Cell>
          </Table.Row>
          </>
  )
}
