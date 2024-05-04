import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Flex, Text, Button, TextField } from '@radix-ui/themes'
import WelcomeHeader from "../../components/WelcomeHeader/WelcomeHeader"
import { signup } from "../../services/API/userRequests"

export default function SignUp() {
  const navigate = useNavigate()
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleCreateAccount = async () => {
    try {
      await signup(email, password, displayName)
      navigate('/')
    } catch (error) {
      //TODO: Add error handling with visibility for user
      console.error(error)
    }
  }

  return (
    <>
      <Flex direction='column'>
        <WelcomeHeader />
        <TextField.Root
          m='2'
          size='3'
          type='text'
          placeholder="Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        >
        </TextField.Root>
        <TextField.Root
          m='2'
          size='3'
          type='email'
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
        </TextField.Root>
        <TextField.Root
          m='2'
          size='3'
          type='password'
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
        </TextField.Root>
        <Button m='2' size='3' onClick={handleCreateAccount}>Create Account</Button>
        <Text mt='4' align='center'>Already have an account?</Text>
        <Button asChild m='2' size='3' variant='outline'><Link to='/'>Log In</Link></Button>
      </Flex>
    </>

  )
}