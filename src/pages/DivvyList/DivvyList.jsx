import { Flex, Table, } from '@radix-ui/themes'
import NavHeader from '../../components/NavHeader/NavHeader'
import DivvyListItem from '../../components/DivvyListItem/DivvyListItem'
import { AddButton } from '../../components/AddButton/AddButton'
import { getDivvys } from '../../services/API/apiHelpers'

export default function DivvyList() {
  const divvys = getDivvys()

  return (
    <>
      <NavHeader title='Dutch' />
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


