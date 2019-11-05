import React, { Dispatch, SetStateAction, useContext } from 'react';
import { Container, StyledLi, StyledList } from './DocumentsStyle';
import DocumentContext from '../../shared/DocumentContext';

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
    const { createNewDocument } = useContext(DocumentContext);

    return (
        <Container>
            <StyledList>
                <StyledLi>
                    <button onClick={createNewDocument}> Utwórz nowy </button>
                </StyledLi>
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
