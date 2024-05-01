import { Flex, Table, } from '@radix-ui/themes';
import DivvyListItem from '../../components/DivvyListItem/DivvyListItem';
import { AddButton } from '../../components/AddButton/AddButton';


export default function DivvyList() {
  return (
    <>
      <Flex direction='column' gap='4' mt='5' >
        <Table.Root size='3'>
          <Table.Body>
            <DivvyListItem />
          </Table.Body>
        </Table.Root>
      </Flex>
      <AddButton />
    </>
  );
}


