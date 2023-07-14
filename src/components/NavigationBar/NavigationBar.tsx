import React, { FC } from 'react';
import { NavigationBarWrapper } from './NavigationBar.styled';

interface NavigationBarProps {}

const NavigationBar: FC<NavigationBarProps> = () => (
 <NavigationBarWrapper data-testid="NavigationBar">
   <div className='logo-placeholder'>Adventure Tracker</div>
   <div className='buttons-wrapper'>
      <div className='login-button'>Log in</div>
      <button>Sign up</button>
   </div>
 </NavigationBarWrapper>
);

export default NavigationBar;
