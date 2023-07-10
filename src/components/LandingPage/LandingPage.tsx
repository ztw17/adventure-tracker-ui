import React, { FC } from 'react';
import { LandingPageWrapper } from './LandingPage.styled';

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => (
 <LandingPageWrapper data-testid="LandingPage">
    LandingPage Component
 </LandingPageWrapper>
);

export default LandingPage;
