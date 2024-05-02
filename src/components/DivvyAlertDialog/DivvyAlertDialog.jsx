import { AlertDialog, Flex, Button } from "@radix-ui/themes"

export default function DivvyAlertDialog(props) {
  const {
    divvyAlertItem = '',
    divvyAlertItemTitle = 'this item',
    divvyAlertTitle = 'Delete this',
    divvyAlertMessage = "Are you sure you want to delete", 
    divvyAlertCancelText = 'Cancel',
    divvyAlertActionText = 'Delete'
  } = props;

  //TODO figure out how to pass in the an action to delete the relevant item from LocalStorage and/or call the API to delete it
  // const divvyAlertItemAction = props.divvyAlertItemAction

  return (
    <>
      <AlertDialog.Root>
          {/* //TODO Figure out how to trigger from an external button  */}
          {/* <AlertDialog.Trigger>
          <Button>Revoke access</Button>
        </AlertDialog.Trigger> */}
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>{divvyAlertTitle} {divvyAlertItem}</AlertDialog.Title>
          <AlertDialog.Description size="2">
            {divvyAlertMessage} {divvyAlertItemTitle}?
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                {divvyAlertCancelText}
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red">
                {divvyAlertActionText}
              </Button>
              {/* //TODO add actual delete action  */}
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
    )
}
