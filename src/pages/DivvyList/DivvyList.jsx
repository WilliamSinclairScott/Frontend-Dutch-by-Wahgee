import { useState } from 'react'
import { Flex, Table, } from '@radix-ui/themes'
import DivvyListItem from '../../components/DivvyListItem/DivvyListItem'
import { AddButton } from '../../components/AddButton/AddButton'
import { getDivvys } from '../../services/SessionStorage/fromSession'
import DivvyEdit from '../../components/DivvyEdit/DivvyEdit'
export default function DivvyList() {
  const [makeNewDivvy, setMakeNewDivvy] = useState(false)
  const divvys = getDivvys()

  const handleDisplayChange = () => {
    setMakeNewDivvy(!makeNewDivvy)
  }
  return (
    <>
      <Flex direction='column' gap='4' mt='5' >
        { !makeNewDivvy &&
        <>
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
          <AddButton action={handleDisplayChange} />
        </>
        }
        {
          makeNewDivvy &&
          <>
            <DivvyEdit />
          </>
        }
      </Flex>
      
    </>
  );
}


