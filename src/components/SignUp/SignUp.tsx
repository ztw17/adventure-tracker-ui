import React, { FC } from 'react';
import { SignUpWrapper } from './SignUp.styled';
import { TextField } from '@mui/material';

interface SignUpProps {}

const SignUp: FC<SignUpProps> = () => (
 <SignUpWrapper data-testid="SignUp">
   <div className="form-wrapper">
      <div className="form-card">
         <span className="sign-up-text">Sign up for free!</span>
         <TextField label="First name" variant="outlined" />
         <TextField label="Last name" variant="outlined" />
         <TextField label="Email address" variant="outlined" />
         <TextField label="Password" variant="outlined" />
      </div>
   </div>
 </SignUpWrapper>
);

export default SignUp;
