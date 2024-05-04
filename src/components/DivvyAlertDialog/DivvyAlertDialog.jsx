import { AlertDialog, Flex, Button } from "@radix-ui/themes"

export default function DivvyAlertDialog(
  title = 'Delete this',
  message = "Are you sure you want to delete this item?",
  cancelButtonText = 'Cancel',
  actionButtonText = 'Delete',
  action
) {

  //TODO Sort out triggering from an external button

  return (
    <>
      <AlertDialog.Root>
        {/* <AlertDialog.Trigger>
          <Button>Revoke access</Button>
        </AlertDialog.Trigger> */}
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>{title}</AlertDialog.Title>
          <AlertDialog.Description size="2">{message}</AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">{cancelButtonText}</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red">{actionButtonText}</Button>
              {action}
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  )
}