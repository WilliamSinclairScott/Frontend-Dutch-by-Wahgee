import { AlertDialog, Flex, Button } from "@radix-ui/themes"

export default function DeleteDialog(props) {
  const deleteItem = props.deleteItem || ''
  const deleteItemTitle = props.deleteItemTitle || 'this item'
  //TODO figure out how to pass in the an action to delete the relevant item from LocalStorage and/or call the API to delete it
  // const deleteItemAction = props.deleteItemAction

  return (
    <>
      <AlertDialog.Root>
          {/* //TODO Figure out how to trigger from an external button  */}
          {/* <AlertDialog.Trigger>
          <Button>Revoke access</Button>
        </AlertDialog.Trigger> */}
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Delete this {deleteItem}</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure you want to delete {deleteItemTitle}?
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red">
                Delete
              </Button>
              {/* //TODO add actual delete action  */}
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  )
}
