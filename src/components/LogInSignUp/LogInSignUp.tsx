import React, { FC } from 'react';
import { LogInSignUpWrapper } from './LogInSignUp.styled';

interface LogInSignUpProps {}

const LogInSignUp: FC<LogInSignUpProps> = () => (
 <LogInSignUpWrapper data-testid="LogInSignUp">
    LogInSignUp Component
 </LogInSignUpWrapper>
);

export default LogInSignUp;
