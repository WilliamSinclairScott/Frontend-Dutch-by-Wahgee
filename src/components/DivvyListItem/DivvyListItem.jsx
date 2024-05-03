import { Table, Flex, Text, IconButton, Link as RadixLink } from '@radix-ui/themes'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

// Component to display a single divvy in a list of divvies 
// providing a link to the divvy detail page.
export default function DivvyListItem({ divvyName, _id }) {
  return (
    <>
      <Table.Row>
        <Table.Cell>
          <RadixLink asChild underline='none'>
          <Link to={`./${_id}`}>
            <Flex justify='between'>
              <Text size='4'>{divvyName}</Text>
              <IconButton asChild variant="ghost">
                <ChevronRightIcon width="24" height="24" />
              </IconButton>
            </Flex>
            </Link>
            </RadixLink>
        </Table.Cell>
      </Table.Row>
    </>
  )
}
