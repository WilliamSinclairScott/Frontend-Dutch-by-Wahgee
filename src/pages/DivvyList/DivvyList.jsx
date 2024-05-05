import { useState } from 'react'
import { Flex, Table, } from '@radix-ui/themes'
import { useState } from 'react'
import NavHeader from '../../components/NavHeader/NavHeader'
import DivvyListItem from '../../components/DivvyListItem/DivvyListItem'
import { AddButton } from '../../components/AddButton/AddButton'
<<<<<<< HEAD
import { getDivvys } from '../../services/API/apiHelpers'

// Component that renders a list of all divvys using data fetched from the API.
export default function DivvyList() {
  const divvys = getDivvys() // Fetching divvy data from the session storage via API helper.

=======
import { getDivvys } from '../../services/SessionStorage/fromSession'
import DivvyEdit from '../../components/DivvyEdit/DivvyEdit'
export default function DivvyList() {
  const [makeNewDivvy, setMakeNewDivvy] = useState(false)
  const divvys = getDivvys()
  const [editMode, setEditMode] = useState(false)
  const switchEditMode = () => setEditMode(!editMode)
>>>>>>> b4da9bba4055e568e404e482570006ce02d7676c
  return (
    <>
      <NavHeader title='Dutch' editMode={editMode} />
      <Flex direction='column' gap='4' mt='5' >
        <Table.Root size='3'>
          <Table.Body>
            { !editMode &&
              divvys.map(divvy => (
                <DivvyListItem
                  divvyName={divvy.name}
                  _id={divvy.id}
                  key={divvy.id} />
              ))
            }
          </Table.Body>
        </Table.Root>
        {
          editMode &&
          <DivvyEdit />
        }
      </Flex>
      <AddButton action={switchEditMode} />
    </>
  );
}


