import React, { FC } from 'react';
import { NavigationBarWrapper } from './NavigationBar.styled';
import mainLogo from '../../assets/icons/mountain.png';

interface NavigationBarProps {}

const NavigationBar: FC<NavigationBarProps> = () => (
 <NavigationBarWrapper data-testid="NavigationBar">
    <div className='logo-wrapper'>
      <img src={mainLogo} className='logo'></img>
      <div className='title font-link'>Adventure Tracker</div>
    </div>
    <div className='buttons-wrapper'>
      <div className='login-button clickable center-buttons'>Log in</div>
      <div className='sign-up-button clickable center-buttons'>Sign up</div>
    </div>
 </NavigationBarWrapper>
);

export default NavigationBar;
