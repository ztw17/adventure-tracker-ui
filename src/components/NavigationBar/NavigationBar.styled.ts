import styled from 'styled-components';

const LogoContainer = styled.div`

`;

export const NavigationBarWrapper = styled.div`
    display: flex;
    height: 70px;
    background-color: #ffffff;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;

    .logo-wrapper {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .logo {
        height: 42px;
        width: 42px;
    }

    .title {
        font-size: 22px;
        margin-left: 10px;
    }

    .font-link {
        font-family: 'Pacifico', cursive;
    }

    .buttons-wrapper {
        display: flex;
    }

    .login-button {
        margin: 0 20px;
    }

    .sign-up-button {
        padding: 10px;
        border: 1px solid gray;
        border-radius: 30px;
    }

    .sign-up-button:hover {
        background-color: #d4d7d9;
        transition: 0.3s;
    }

    .center-buttons {
        display: flex;
        align-items: center;
    }

    .clickable {
        cursor: pointer;
    }
`;
