import { Dialog, Flex, Button } from "@radix-ui/themes"

export default function DutchNotiDialog(
  triggerButtonText = 'Delete',
  triggerButtonVariant = 'solid',
  triggerButtonColor = 'red',
  title = "Can't remove participant",
  message = "To remove a participant you first need to remove any associations they have with any Transactions.",
  closeButtonText = "Dismiss") {

  //TODO Sort out triggering from an external button

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button
            my='6'
            size='3'
            variant={triggerButtonVariant}
            color={triggerButtonColor}
          >
            {triggerButtonText}
          </Button>
        </Dialog.Trigger>
        <Dialog.Content maxWidth="450px">
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            {message}
          </Dialog.Description>
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button>{closeButtonText}</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  )
}