import { Dialog, Flex, Button, } from "@radix-ui/themes"

export default function DivvyNotiDialog ({
  divvyNotiTitle = "Can't remove participant",
  divvyNotiMessage = "To remove a participant you first need to remove any associations they have with any Transactions.",
  divvyNotiCancelText = "Dismiss" })
  {

return (
  <>
  <Dialog.Root>
  {/* <Dialog.Trigger>
    <Button>Uh-Oh</Button>
  </Dialog.Trigger> */}

  <Dialog.Content maxWidth="450px">
    <Dialog.Title>{divvyNotiTitle}</Dialog.Title>
    <Dialog.Description size="2" mb="4">
      {divvyNotiMessage}
    </Dialog.Description>
    <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
        <Button>{divvyNotiCancelText}</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
  </>
)
}


// export default function NotiDialog(props) {
//   const deleteItem = props.deleteItem || ''
//   const deleteItemTitle = props.deleteItemTitle || 'this item'
//   //TODO figure out how to pass in the an action to delete the relevant item from LocalStorage and/or call the API to delete it
//   // const deleteItemAction = props.deleteItemAction

//   return (
//     <>
//       <Dialog.Root>
//           {/* //TODO Figure out how to trigger from an external button  */}
//           <Dialog.Trigger>
//           <Button>Revoke access</Button>
//         </Dialog.Trigger>
//         <Dialog.Content maxWidth="450px">
//           <Dialog.Title>Delete this {deleteItem}</Dialog.Title>
//           <Dialog.Description size="2">
//             Are you sure you want to delete {deleteItemTitle}?
//           </Dialog.Description>

//           <Flex gap="3" mt="4" justify="end">
//             <Dialog.Cancel>
//               <Button variant="soft" color="gray">
//                 Cancel
//               </Button>
//             </Dialog.Cancel>
//             <Dialog.Action>
//               <Button variant="solid" color="red">
//                 Delete
//               </Button>
//               {/* //TODO add actual delete action  */}
//             </Dialog.Action>
//           </Flex>
//         </Dialog.Content>
//       </Dialog.Root>
//     </>
//   )
// }
