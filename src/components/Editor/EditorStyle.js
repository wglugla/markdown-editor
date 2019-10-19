import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
    width: 100%;
    height: 90vh;
    padding: 2rem;
    box-sizing: border-box;
    background-color: #1e2126;
    color: #abb2bf;
`;

export const StyledForm = styled.form`
    background: gray;
    width: 100%;
    overflow: hidden;
    @media (min-width: 900px) {
        width: 50%;
    }
`;
