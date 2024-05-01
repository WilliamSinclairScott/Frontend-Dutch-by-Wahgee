
import { Flex, Heading, Button, TextField } from '@radix-ui/themes';


export default function SignIn () {

  return (
    <>

      <Flex direction='column' m='4' >
<Heading align='center' size='9'>Dutch</Heading>
        <TextField.Root m='2'size='3'  type='email' placeholder="Email">

        </TextField.Root>

        <TextField.Root m='2' size='3' type='password' placeholder="Password">

        </TextField.Root>

        <Button m='2' size='3'>Log In</Button>

      </Flex>
    </>

  )
}



// export default SignInForm;