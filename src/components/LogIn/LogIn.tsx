import React, { FC } from 'react';
import { LogInWrapper } from './LogIn.styled';

interface LogInProps {}

const LogInPage: FC<LogInProps> = () => (
 <LogInWrapper data-testid="LogIn">
    LogIn Component
 </LogInWrapper>
);

export default LogInPage;
