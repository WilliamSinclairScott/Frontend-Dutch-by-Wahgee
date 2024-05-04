import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { Flex, TextField, Button, Text } from '@radix-ui/themes'
import WelcomeHeader from "../../components/WelcomeHeader/WelcomeHeader"
import { login } from '../../services/API/userRequests'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleAuth = async () => {
    try{
      await login(email, password)
      navigate('/Divvys')
    }catch(error){
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