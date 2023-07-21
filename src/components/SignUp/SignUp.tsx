import React, { FC } from 'react';
import { SignUpWrapper } from './SignUp.styled';

interface SignUpProps {}

const SignUp: FC<SignUpProps> = () => (
 <SignUpWrapper data-testid="SignUp">
    SignUp Component
 </SignUpWrapper>
);

export default SignUp;
