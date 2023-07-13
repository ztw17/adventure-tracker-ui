import React, { FC } from 'react';
import { NavigationBarWrapper } from './NavigationBar.styled';

interface NavigationBarProps {}

const NavigationBar: FC<NavigationBarProps> = () => (
 <NavigationBarWrapper data-testid="NavigationBar">
    NavigationBar Component
 </NavigationBarWrapper>
);

export default NavigationBar;
