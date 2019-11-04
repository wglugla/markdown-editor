import React, { Dispatch, SetStateAction } from 'react';
import { Container, StyledLi, StyledList } from './DocumentsStyle';

interface Document {
    title: string;
    content: string;
}

interface Props {
    docs: Array<Document>;
    setVisibility: Dispatch<SetStateAction<boolean>>;
}

const Documents = (props: Props) => {
    const { docs, setVisibility } = props;
    return (
        <Container>
            <StyledList>
                {docs.map((doc, i) => {
                    return (
                        <StyledLi key={i}>
                            <h3>{doc.title}</h3>
                        </StyledLi>
                    );
                })}
            </StyledList>
            <button onClick={() => setVisibility(false)}> Zamknij </button>
        </Container>
    );
};

export default Documents;
