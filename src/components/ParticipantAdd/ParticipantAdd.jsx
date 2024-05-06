import { useState } from 'react'
import { Flex, Button, TextField } from '@radix-ui/themes';
// branch component add purposes only :)
export default function ParticipantAdd({ addParticipant }) {
  
  //on subit (enter or whatever) add the participant to the list

  const [newParticipant, setNewParticipant] = useState('')

  // Handle text field input changes
  const handleInputChange = (e) => {
    setNewParticipant(e.target.value)
  }

  // Wrap the original add function to clear the input field
  const handleAddClick = () => {
    addParticipant({ target: { previousSibling: { value: newParticipant } } })
    setNewParticipant('')
  }

  return (
    <Flex>
      <TextField.Root 
      placeholder='New Participant' 
      type='text' 
      adjustresize='scroll' 
      mt='3' 
      size='3'
      value={newParticipant}
      onChange={handleInputChange} />
      {newParticipant.length > 0 && (
    <Button size='3' onClick={handleAddClick}>Add</Button>
  )}
    </Flex>    
  )
}
