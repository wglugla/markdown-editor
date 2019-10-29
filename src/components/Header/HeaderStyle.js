import styled from 'styled-components';

export const StyledHeader = styled.header`
    @media (max-width: 900px) {
        padding: 1rem 0;
        flex-direction: column;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    min-height: 80px;
    padding: 0 2rem;
    font-size: 0.7em;
    color: #ffffff;
    background: #1f1f1f;
    z-index: 100;
`;

export const StyledList = styled.ul`
    @media (max-width: 900px) {
        padding: 1rem 0;
    }
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
        height: 100%;
        margin: 1rem 0;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 1.4em;
    margin: 0 0 0 1rem;
    padding: 0;
`;

export const StyledLink = styled.a`
    font-family: 'Roboto', sans-serif;
    direction: ltr;
    font-weight: 500;
    height: auto;
    line-height: normal;
    max-width: 220px;
    min-height: 40px;
    padding: 0.7rem 1rem;
    margin: 0;
    margin-left: 1rem;
    text-align: left;
    color: #ffffff;
    background-color: #333;
    font-size: 14px;
    text-decoration: none;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledLogo = styled.img`
    width: 40px;
`;
