import { Box, Flex, Heading, IconButton, DropdownMenu } from '@radix-ui/themes'
import { Share1Icon, Share2Icon, DotsVerticalIcon } from '@radix-ui/react-icons'
import { NavLink } from 'react-router-dom'

//TODO: Add logic to replace left icon with Done button for edit specific pages
//TODO: Add logic to show menu delete options only on specific pages
//TODO: Add Heading resizing CSS, etc to handle long titles (ideally we wrap and change font size insead of truncating)

export default function NavHeader({ title = 'Dutch' }) {

  return (
    <nav>
      <Flex as="header" align='center' justify='between' gap="3" p='1' mb='6' >
        <Box width='96px'>
          <NavLink to="/divvys">
            <IconButton size='3' variant="ghost" aria-label="Home">
              <Share1Icon width='28' height='28' />
            </IconButton>
          </NavLink>
        </Box>
        <Heading truncate size='6'>{title}</Heading>
        <Box width='96px' align='end'>
          <IconButton size='3' mr='2' variant="ghost" aria-label="Share">
            <Share2Icon width='28' height='28' />
          </IconButton>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconButton size='3' ml='2' variant="ghost" aria-label="Menu">
                <DotsVerticalIcon width='28' height='28' />
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
