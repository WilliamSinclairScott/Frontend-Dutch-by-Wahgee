import { Box, Heading, Text, Em } from '@radix-ui/themes'


export default function WelcomeHeader() {
  return (
    <>
      <Box my='8' align='center'>
        <Text size='3'>Welcome to</Text>
        <Heading align='center' size='9' >Dutch</Heading>
        <Text size='2' color='gray'>
          <Em>Easily divvy up expenses</Em>
        </Text>
      </Box>
    </>

  )
}