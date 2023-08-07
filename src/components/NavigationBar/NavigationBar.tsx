import React, { FC } from 'react';
import { NavigationBarWrapper } from './NavigationBar.styled';
import mainLogo from '../../assets/icons/mountain.png';
import { useNavigate } from 'react-router-dom';

interface NavigationBarProps {}

const NavigationBar: FC<NavigationBarProps> = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/')
  };

  const handleLogInClick = () => {
    navigate('/login')
  };
  
  const handleSignUpClick = () => {
    navigate('/signup')
  };

  return (
  <NavigationBarWrapper data-testid="NavigationBar">
      <div onClick={handleHomeClick} className='logo-wrapper'>
        <img src={mainLogo} className='logo'></img>
        <div className='title font-link'>Adventure Tracker</div>
      </div>
      <div className='buttons-wrapper'>
        <div onClick={handleLogInClick} className='login-button clickable center-buttons'>Log in</div>
        <div onClick={handleSignUpClick} className='sign-up-button clickable center-buttons'>Sign up</div>
      </div>
  </NavigationBarWrapper>
  );
}

export default NavigationBar;
