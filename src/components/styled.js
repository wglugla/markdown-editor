import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 90vh;
    overflow-y: hidden;
`;

export const StyledToggler = styled.button`
    font-family: inherit;
    position: absolute;
    right: 1rem;
    height: 5vh;
    padding: 0rem 1rem;
    box-sizing: border-box;
    background: none;
    border: none;
    font-weight: 600;
    z-index: 100;
    background: #ffffff;
    cursor: pointer;
    :hover,
    :focus {
        color: #888888;
    }
    @media (min-width: 900px) {
        display: none;
    }
`;
