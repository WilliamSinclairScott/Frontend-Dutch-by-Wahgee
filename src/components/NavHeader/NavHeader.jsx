import { Box, Flex, Heading, Button, IconButton, DropdownMenu } from '@radix-ui/themes'
import { Share1Icon, Share2Icon, DotsVerticalIcon } from '@radix-ui/react-icons'
import { NavLink, useParams, useLocation, useNavigate} from 'react-router-dom'

//TODO: Add Heading resizing CSS, etc to handle long titles (ideally we wrap and change font size insead of truncating)

export default function NavHeader({ 
  title, editMode, setEditMode, 
  addTransaction,setAddTransaction,
  apiRequestOnSave, dataForapiRequestOnSave
}) {
  const currentPath = useLocation().pathname
  const divvyId = useParams().divvyId
  const transactionId = useParams().transactionId
  const onDivvyPage = divvyId ? true : false
  const navigate = useNavigate()
  const shareData = {
    title: 'Dutch',
    text: 'Check out details about  on this link!',
    url: { currentPath }
  }

  const handleShare = async () => {
    try {
      await navigator.share(shareData);
      console.log('Content shared successfully!');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  }

  return (
    <nav>
      <Flex as="header" align='center' justify='between' gap="3" p='1' mb='6' >
        <Box width='96px'>
          {transactionId ?
            cancelButton({ action: () => {navigate(`/divvys/${divvyId}`)}})
            :
          addTransaction
            ? cancelButton({ action: () => {setAddTransaction(!addTransaction)}})
            :
          editMode
            ? cancelButton({ action: () => {setEditMode(!editMode)}})
            : 
            <NavLink to="/divvys">
              <IconButton size='3' variant="ghost" aria-label="Home">
                <Share1Icon width='28' height='28' />
              </IconButton>
            </NavLink>
          }
        </Box>
        <Heading truncate size='4'>{title}</Heading>
        <Box width='96px' align='end'>
          {transactionId ?
            saveButton({ action: () => {apiRequestOnSave(dataForapiRequestOnSave)}})
            :
          addTransaction
            ? saveButton({ action: () => {apiRequestOnSave(dataForapiRequestOnSave)}})
            :
          
          
          editMode
            ? saveButton({ action: () => {apiRequestOnSave(dataForapiRequestOnSave)} })
            :
            <>
              {onDivvyPage
                ?
                <IconButton size='3' mr='2' variant="ghost" aria-label="Share" onClick={handleShare} >
                  <Share2Icon width='28' height='28' />
                </IconButton>
                : null
              }
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <IconButton size='3' ml='2' variant="ghost" aria-label="Menu">
                    <DotsVerticalIcon width='28' height='28' />
                  </IconButton>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item
                    onClick={() => {setEditMode(!editMode)}}>
                    Edit this Divvy</DropdownMenu.Item>
                  <DropdownMenu.Item>Log Out</DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </>
          }
        </Box>
      </Flex>
    </nav>
  )
}

function cancelButton({ action }) {
  return (
    <Button variant='outline' size='3' onClick={action}>
      Cancel
    </Button>
  )
}

function saveButton({ action }) {
  return (
    <Button size='3' onClick={action}>
      Save
    </Button>
  )
}