
import { IconButton, Box } from '@radix-ui/themes';
import { PlusCircledIcon } from '@radix-ui/react-icons'

export function AddButton() {
  return (
    <Box position='fixed' bottom='6' right='6'>
      <IconButton variant="ghost" size='4'>
        <PlusCircledIcon width="112" height="112" />
      </IconButton>
    </Box>
  )
}
