import { Table, Flex, Text, IconButton, Link as RadixLink } from '@radix-ui/themes'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

export default function DivvyListItem({
  divvyName = 'Prop Divvy',
  _id = '123'
}) {
  return (
    <>
      <Table.Row>
        <Table.Cell>
          <RadixLink asChild underline='none'>
            <Link asChild to={`./${_id}`}>
              <Flex justify='between'>
                <Text size='4'>Friday Drinks</Text>
                <IconButton asChild variant="ghost">
                  <ChevronRightIcon width="24" height="24" />
                </IconButton>
              </Flex>
            </Link>
          </RadixLink>
        </Table.Cell>
      </Table.Row >
      < Table.Row >
        <Table.Cell>
          <RadixLink asChild underline='none'>
            <Link asChild to={`./${_id}`}>
              <Flex justify='between'>
                <Text size='4'>Ramen</Text>
                <IconButton asChild variant="ghost">
                  <ChevronRightIcon width="24" height="24" />
                </IconButton>
              </Flex>
            </Link>
          </RadixLink>
        </Table.Cell>
      </Table.Row >
      <Table.Row>
        <Table.Cell>
          <RadixLink asChild underline='none'>
          <Link asChild to={`./${_id}`}>
            <Flex justify='between'>
              <Text size='4'>Upstate Weekend</Text>
              <IconButton asChild variant="ghost">
                <ChevronRightIcon width="24" height="24" />
              </IconButton>
            </Flex>
            </Link>
            </RadixLink>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <RadixLink asChild underline='none'>
          <Link asChild to={`./${_id}`}>
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
