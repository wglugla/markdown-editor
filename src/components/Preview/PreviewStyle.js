import styled from 'styled-components';

export const PreviewView = styled.div`
    display: none;
    @media (min-width: 900px) {
        display: block;
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
            content: 'Preview';
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            align-items: center;
            padding-left: 2rem;
            color: #222222;
            width: 100%;
            height: 5vh;
            background: #ffffff;
        }
    }
`;

export const StyledInlineCode = styled.code`
    display: inline;
    padding: 0.2rem 0.5rem;
    color: #333333;
`;
