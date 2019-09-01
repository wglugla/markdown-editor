import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    box-sizing: border-box;
    padding: 0.5em 0.2rem;
    font-size: 0.8em;
    color: #ffffff;
    background: #21304a;
    /* box-shadow: 0px 6px 15px -3px rgba(0, 0, 0, 0.2); */
    z-index: 100;
`;

export const StyledList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const StyledTitle = styled.h1`
    font-size: 1.2em;
    margin: 0 0 0 2rem;
    padding: 0;
`;

export const StyledLink = styled.a`
    margin: 0.5rem;
    padding: 1rem 2rem;
    color: #ffffff;
    font-size: 1.1em;
    font-weight: 500;
`;
