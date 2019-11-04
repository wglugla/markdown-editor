import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface Document {
    title: string;
    content: string;
}

interface Props {
    docs: Array<Document>;
    setVisibility: Dispatch<SetStateAction<boolean>>;
}

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 90vh;
    background: #333333;
    z-index: 100;
`;

const StyledLi = styled.li`
    min-width: 200px;
    width: 30%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    background: #fff;
    box-sizing: border-box;
`;

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

const DocumentsLibrary = (props: Props) => {
    const { docs, setVisibility } = props;
    return (
        <Container>
            <StyledList>
                {docs.map(doc => {
                    return (
                        <StyledLi>
                            <h3>{doc.title}</h3>
                        </StyledLi>
                    );
                })}
            </StyledList>
            <button onClick={() => setVisibility(false)}> Zamknij </button>
        </Container>
    );
};

export default DocumentsLibrary;
