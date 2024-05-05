import { Flex, Tabs, Box, Text } from '@radix-ui/themes'
import NavHeader from '../../components/NavHeader/NavHeader'
import DivvyDetail from '../../components/DivvyDetail/DivvyDetail'
import DivvyBalances from '../../components/DivvyBalances/DivvyBalances'
import { getDivvyDetails } from '../../services/API/apiHelpers'
import { useParams } from 'react-router-dom'


// Main component for the Divvy page, uses tabs to switch between detailed view and balance overview.
export default function Divvy() {
  const { divvyId } = useParams()
  console.log(divvyId);
  const divvyDetails = getDivvyDetails(divvyId)
  const divvyTitle = divvyDetails.divvyName
  return (
    <>
      <NavHeader title={divvyTitle} editMode='true' />
        <Flex direction='column'>
          <Tabs.Root defaultValue='details'>
            <Tabs.List justify='center'>
              <Tabs.Trigger value='details'>
                <Text size='5'>Details</Text>
              </Tabs.Trigger>
              <Tabs.Trigger value='balances'>
                <Text size='5'>Balances</Text>
              </Tabs.Trigger>
            </Tabs.List>
            <Box pt='2'>
              <Tabs.Content value='details'>
                <DivvyDetail />
              </Tabs.Content>
              <Tabs.Content value='balances'>
                <DivvyBalances />
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </Flex >
      </>
      )
}