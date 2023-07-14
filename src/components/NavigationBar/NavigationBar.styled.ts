import styled from 'styled-components';

const LogoContainer = styled.div`

`;

export const NavigationBarWrapper = styled.div`
    display: flex;
    height: 70px;
    background-color: #FFFFFF;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;

    .logo-placeholder {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .buttons-wrapper {
        display: flex;
    }

    .login-button {
        margin: 0 20px;
    }
`;
