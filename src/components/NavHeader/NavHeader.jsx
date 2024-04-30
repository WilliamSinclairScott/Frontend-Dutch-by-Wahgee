import { Box, Flex, Heading, IconButton, DropdownMenu } from '@radix-ui/themes'
import { Share1Icon, Share2Icon, DotsVerticalIcon } from '@radix-ui/react-icons'
import { NavLink } from 'react-router-dom'


export default function NavHeader() {

  return (
    <nav>
      <Flex as="header" align='center' justify='between' gap="3" p='1' >
        <Box width='96px'>
          <NavLink to="/divvys">
            <IconButton size='3' variant="ghost" aria-label="Home">
              <Share1Icon width="32" height="32" />
            </IconButton>
          </NavLink>
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
                <DropdownMenu.Item>Delete this Divvy</DropdownMenu.Item>
                <DropdownMenu.Item>Delete this Transaction</DropdownMenu.Item>
              <DropdownMenu.Item>Log Out</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>
      </Flex>
    </nav>
  )
}
