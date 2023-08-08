import React, { FC } from 'react';
import { SignUpWrapper } from './SignUp.styled';
import { TextField } from '@mui/material';

interface SignUpProps {}

const SignUp: FC<SignUpProps> = () => (
 <SignUpWrapper data-testid="SignUp">
   <div>
      <TextField label="First name" variant="outlined" />
      <TextField label="Last name" variant="outlined" />
      <TextField label="Email address" variant="outlined" />
      <TextField label="Password" variant="outlined" />
   </div>
 </SignUpWrapper>
);

export default SignUp;
