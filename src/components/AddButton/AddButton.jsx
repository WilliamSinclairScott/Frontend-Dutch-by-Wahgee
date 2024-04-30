
import { IconButton, Box } from '@radix-ui/themes';
import { PlusCircledIcon, PlusIcon } from '@radix-ui/react-icons'

export function AddButton() {
  return (
    <Box position='fixed' bottom='6' right='6'>
      <IconButton radius='full' variant='solid' size='4'>
        <PlusIcon width='48' height='48' />
      </IconButton>
    </Box>
  )
}
