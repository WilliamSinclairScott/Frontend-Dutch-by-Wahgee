import { Flex, Tabs, Box, Text } from '@radix-ui/themes'
import DivvyDetail from '../../components/DivvyDetail/DivvyDetail'

export default function Divvy() {
  return (
    <>
      <Box>
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
                <code>Balances Placeholder</code>
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </Flex >
      </Box>
    </>
  )
}
