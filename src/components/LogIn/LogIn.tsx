import React, { FC } from 'react';
import { LogInWrapper } from './LogIn.styled';

interface LogInProps {}

const LogIn: FC<LogInProps> = () => (
 <LogInWrapper data-testid="LogIn">
    LogIn Component
 </LogInWrapper>
);

export default LogIn;
