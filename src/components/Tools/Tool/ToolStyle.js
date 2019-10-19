import styled from 'styled-components';

export const Icon = styled.img`
    height: 100%;
`;

export const StyledButton = styled.button`
    background: none;
    border: none;
    height: 5vh;
    padding: 0.7rem;
    box-sizing: border-box;
    cursor: pointer;
    :hover,
    :focus {
        filter: invert(27%) sepia(72%) saturate(429%) hue-rotate(150deg) brightness(100%) contrast(89%);
    }
`;
