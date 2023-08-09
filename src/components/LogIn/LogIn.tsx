import React, { FC } from 'react';
import { LogInWrapper } from './LogIn.styled';
import { TextField } from '@mui/material';

interface LogInProps {}

const LogInPage: FC<LogInProps> = () => (
 <LogInWrapper data-testid="LogIn">
   <div className="form-wrapper">
      <div className="form-card">
         <TextField label="Email address" variant="outlined" />
         <TextField label="Password" variant="outlined" />
      </div>
   </div>
 </LogInWrapper>
);

export default LogInPage;
