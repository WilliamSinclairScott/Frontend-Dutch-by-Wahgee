import { Flex, Table, } from '@radix-ui/themes'
import DivvyListItem from '../../components/DivvyListItem/DivvyListItem'
import { AddButton } from '../../components/AddButton/AddButton'
import { getDivvys } from '../../services/API/apiHelpers'

// Component that renders a list of all divvys using data fetched from the API.
export default function DivvyList() {
  const divvys = getDivvys() // Fetching divvy data from the session storage via API helper.

  return (
    <>
      <Flex direction='column' gap='4' mt='5' >
        <Table.Root size='3'>
          <Table.Body>
            {divvys.map(divvy => (
              <DivvyListItem
                divvyName={divvy.name}
                _id={divvy.id}
                key={divvy.id} />
            ))}
          </Table.Body>
        </Table.Root>
      </Flex>
      <AddButton />
    </>
  );
}


