
// import * as Form from '@radix-ui/react-form';
// import './SignIn.css'
import { Flex, Heading, Button, TextField } from '@radix-ui/themes';



// const SignInForm = () => (
//   <Form.Root className="FormRoot">
//     <Form.Field className="FormField" name="email">
//       <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
//         <Form.Label className="FormLabel">Email</Form.Label>
//         <Form.Message className="FormMessage" match="valueMissing">
//           Please enter your email
//         </Form.Message>
//         <Form.Message className="FormMessage" match="typeMismatch">
//           Please provide a valid email
//         </Form.Message>
//       </div>
//       <Form.Control asChild>
//         <input className="Input" type="email" required />
//       </Form.Control>
//     </Form.Field>
//     <Form.Field className="FormField" name="password">
//       <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
//         <Form.Label className="FormLabel">Password</Form.Label>
//         <Form.Message className="FormMessage" match="valueMissing">
//           Please enter your password
//         </Form.Message>
//         <Form.Message className="FormMessage" match="typeMismatch">
//           Please provide a valid password
//         </Form.Message>
//       </div>
//       <Form.Control asChild>
//         <input className="Input" type="password" required />
//       </Form.Control>
//     </Form.Field>
//     <Form.Submit asChild>
//       <button className="Button" style={{ marginTop: 10 }}>
//         Log In
//       </button>
//     </Form.Submit>
//   </Form.Root>
// );

// SignIn.js
import { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the sign-in logic here
  };

  //   return (
  //     <div className="signin-container">
  //       <h1>Sign In</h1>
  //       <form onSubmit={handleSubmit}>
  //         <input
  //           type="email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           placeholder="Email"
  //           required
  //         />
  //         <input
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           placeholder="Password"
  //           required
  //         />
  //         <button type="submit">Log In</button>
  //       </form>
  //     </div>
  //   );
  // };

  return (
    <>

      <Flex direction='column' m='4' >
<Heading align='center' size='9'>Dutch</Heading>
        <TextField.Root m='2'size='3' placeholder="Email">

        </TextField.Root>

        <TextField.Root m='2' size='3' type='password' placeholder="Password">

        </TextField.Root>

        <Button m='2' size='3'>Log In</Button>

      </Flex>
    </>

  )
}
export default SignIn;



// export default SignInForm;