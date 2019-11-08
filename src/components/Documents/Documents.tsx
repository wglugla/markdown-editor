import React, { Dispatch, SetStateAction, useContext } from 'react';
import { Container, StyledLi, StyledList } from './DocumentsStyle';
import DocumentContext from '../../shared/DocumentContext';
import { makeStyles } from '@material-ui/core/styles';
import { Fab, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        top: '1rem',
        right: '1rem'
    },
    paper: {},
    button: {
        background: 'none',
        margin: '0',
        width: '100%',
        height: '100%',
        padding: '1rem'
    }
}));

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

    const classes = useStyles();

    return (
        <Container>
            <StyledList>
                <StyledLi>
                    <Fab color="primary" aria-label="add" onClick={createNewDocument}>
                        <AddIcon />
                    </Fab>
                </StyledLi>
                {docs.map((doc, i) => {
                    return (
                        <StyledLi key={doc.id}>
                            <button onClick={loadDoc} value={doc.id} className={classes.button}>
                                <Typography variant="subtitle2" component="h3">
                                    {doc.title}
                                </Typography>
                            </button>
                        </StyledLi>
                    );
                })}
            </StyledList>
            <Fab
                color="secondary"
                aria-label="close"
                size="small"
                className={classes.fab}
                onClick={() => setVisibility(false)}
            >
                <CloseIcon />
            </Fab>
        </Container>
    );
};

export default Documents;
