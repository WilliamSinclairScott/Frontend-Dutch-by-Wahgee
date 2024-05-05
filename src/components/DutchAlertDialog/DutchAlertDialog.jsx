import { AlertDialog, Flex, Button } from "@radix-ui/themes"

//TODO Sort out triggering from an external button

export default function DutchAlertDialog({
  triggerButtonText = 'Trigger Alert Dialog',
  triggerButtonVariant = 'solid',
  triggerButtonColor = 'red',
  title = 'Title',
  message = "Message/question",
  cancelButtonText = 'Cancel',
  actionButtonText = 'Confirm Action',
  action
}) {
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button
            my='6'
            size='3'
            variant={triggerButtonVariant}
            color={triggerButtonColor}
          >
            {triggerButtonText}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>{title}</AlertDialog.Title>
          <AlertDialog.Description size="2">{message}</AlertDialog.Description>
          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">{cancelButtonText}</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red" onClick={action} >
                {actionButtonText}
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  )
}