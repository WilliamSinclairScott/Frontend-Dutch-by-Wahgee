
import { IconButton, Box } from '@radix-ui/themes';
import { PlusIcon } from '@radix-ui/react-icons'

export function AddButton({ action }) {
  return (
    <Box position='fixed' bottom='6' right='6'>
      <IconButton
        radius='full'
        variant='solid'
        size='4'
        onClick={action}
        >
        <PlusIcon width='48' height='48' />
      </IconButton>
    </Box>
  )
}
