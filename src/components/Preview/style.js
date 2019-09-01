import styled from 'styled-components';

export const PreviewView = styled.div`
    width: 50%;
    height: 100%;
    padding: 3rem 2rem;
    overflow-wrap: break-word;
    box-sizing: border-box;
    font-size: 12px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
    ::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 5vh;
        background: #e7e7e7;
    }
`;
