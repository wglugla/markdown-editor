import styled from 'styled-components';

export const StyledButton = styled.button`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    height: auto;
    line-height: normal;
    min-height: 40px;
    padding: 0.7rem 1rem;
    margin: 1rem 0;
    text-align: center;
    color: #ffffff;
    background-color: #333;
    font-size: 14px;
    text-decoration: none;
    border: none;
    cursor: pointer;
`;

export const StyledMenu = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        width: 100%;
        color: #000;
    }
`;

export const MenuContainer = styled.div<{ visibility: number }>`
    @media (max-width: 900px) {
        display: flex;
        ${props => props.visibility && `display: none`};
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0;
        right: 0vw;
        width: 100vw;
        height: 40vh;
        background: #fff;
        z-index: 200;
    }
`;
