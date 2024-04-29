import { Box, Flex, Heading, IconButton, DropdownMenu } from '@radix-ui/themes'
import { Share1Icon, Share2Icon, DotsVerticalIcon } from '@radix-ui/react-icons'


export default function NavHeader() {

  return (
    <nav>
      <Flex as="header" align='center' justify='between' gap="3" p='1' >
        <Box width='96px'>
          <IconButton size='3' variant="ghost" aria-label="Home">
            <Share1Icon width="32" height="32" />
          </IconButton>
        </Box>
        <Heading size='7'>Divvys</Heading>
        <Box width='96px' align='end'>
          <IconButton size='3' mr='2' variant="ghost" aria-label="Share">
            <Share2Icon width="32" height="32" />
          </IconButton>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconButton size='3' ml='2' variant="ghost" aria-label="Menu">
                <DotsVerticalIcon width="32" height="32" />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Delete Divvy</DropdownMenu.Item>
              {/* <DropdownMenu.Separator /> */}
              <DropdownMenu.Item>Log Out</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>
      </Flex>
    </nav>
  )
}
