import styled from 'styled-components';

export const Icon = styled.img`
    height: 100%;
`;

export const StyledButton = styled.button`
    background: none;
    border: none;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    margin: 0 0.3rem;
    padding: 0.3rem;
    cursor: pointer;
    :hover,
    :focus {
        filter: invert(27%) sepia(72%) saturate(429%) hue-rotate(150deg) brightness(100%) contrast(89%);
    }
`;
