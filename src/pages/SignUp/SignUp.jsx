import { useState } from "react"
import { Link } from "react-router-dom"
import { Flex, Text, Button, TextField } from '@radix-ui/themes'
import WelcomeHeader from "../../components/WelcomeHeader/WelcomeHeader"
import { signup } from "../../services/API/userRequests"

// SignUp component allows new users to register for an account.
export default function SignUp() {
  const [displayName, setDisplayName] = useState('') // State to hold the user's display name.
  const [email, setEmail] = useState('') // State to hold the user's email.
  const [password, setPassword] = useState('') // State to hold the user's password.

  const handleCreateAccount = () => {
    signup(email, password, displayName) // API call to register a new user with entered details.
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