import { useState } from "react"
import { Link } from "react-router-dom"
import { Flex, TextField, Button, Text } from '@radix-ui/themes'
import WelcomeHeader from "../../components/WelcomeHeader/WelcomeHeader"
// import { signin } from "../../services/API/user"


export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAuth = () => {
    console.log('email:', email, 'password:', password);
    // signin(email, password)
  }

  return (
    <>
      <Flex direction='column'>
        <WelcomeHeader />
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
        <Button m='2' size='3' onClick={handleAuth}>Log In</Button>
        <Text mt='4' align='center'>Don't have an account?</Text>
        <Button asChild m='2' size='3' variant='outline'><Link to='/sign-up'>Sign Up</Link></Button>
      </Flex>
    </>

  )
}