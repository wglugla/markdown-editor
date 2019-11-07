import React, { Dispatch, SetStateAction, useContext } from 'react';
import { Container, StyledLi, StyledList } from './DocumentsStyle';
import DocumentContext from '../../shared/DocumentContext';

interface Document {
    id: string;
    title: string;
    content: string;
}

interface Props {
    docs: Array<Document>;
    setVisibility: Dispatch<SetStateAction<boolean>>;
}

const Documents = (props: Props) => {
    const { docs, setVisibility } = props;
    const { createNewDocument, loadDocument } = useContext(DocumentContext);

    const loadDoc = async (e: React.MouseEvent<HTMLButtonElement>) => {
        await loadDocument(e.currentTarget.value);
    };

    return (
        <Container>
            <StyledList>
                <StyledLi>
                    <button onClick={createNewDocument}> Utwórz nowy </button>
                </StyledLi>
                {docs.map((doc, i) => {
                    return (
                        <StyledLi key={doc.id}>
                            <button onClick={loadDoc} value={doc.id}>
                                {doc.title}
                            </button>
                        </StyledLi>
                    );
                })}
            </StyledList>
            <button onClick={() => setVisibility(false)}> Zamknij </button>
        </Container>
    );
};

export default Documents;
