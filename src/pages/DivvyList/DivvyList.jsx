import { Flex, Table, } from '@radix-ui/themes';
import DivvyListItem from '../../components/DivvyListItem/DivvyListItem';


export default function DivvyList() {
  return (
    <>
    <Flex direction='column' gap='4' mt='5' >
      <Table.Root variant='surface' size='3'>
        <Table.Body>
          <DivvyListItem></DivvyListItem>
        </Table.Body>
      </Table.Root>
    </Flex>
    </>
  );
}


