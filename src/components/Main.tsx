import firebase from 'firebase/app';
import 'firebase/firestore';
import React, { useState } from 'react';
import LoginContext from '../shared/loginContext';
import { ModeContext, modes } from '../shared/ModeContext';
import Documents from './Documents/Documents';
import Editor from './Editor/Editor';
import Header from './Header/Header';
import Preview from './Preview/Preview';
import { Container, StyledToggler } from './styled.js';

interface Document {
    content: string;
    title: string;
}

const Main = () => {
    const [viewMode, setViewMode] = useState(modes.editor);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState('');
    const [buffer, setBuffer] = useState(``);
    const [scrollTop, changeScrollTop] = useState(0);
    const [title, setTitle] = useState('');
    const [libraryVisiblity, setLibraryVisibility] = useState(false);
    const [documents, setDocuments] = useState(new Array<Document>());

    const changeBuffer = (newBuffer: string) => {
        setBuffer(newBuffer);
        const matchedTitle = newBuffer.match(/^(.*)$/m);
        const title = matchedTitle ? matchedTitle[0].match(/^..(.*)$/m) : '';
        document.title = title ? title[1] : 'New document';
        setTitle(document.title);
    };

    const setMode = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setViewMode(prev => (prev === modes.editor ? modes.preview : modes.editor));
    };

    const openLibrary = async (id: string) => {
        const db = firebase.firestore();
        try {
            const snapshot = await db.collection(`users/${id}/articles`).get();
            const userDocuments: Array<Document> = [];
            snapshot.docs.forEach(doc => {
                let newEl = doc.data() as Document;
                userDocuments.push(newEl);
            });
            setDocuments(userDocuments);
        } catch (e) {
            console.error(e);
        }
    };

    const setLoginStatus = async (value: boolean, id: string) => {
        setIsLoggedIn(value);
        if (value) {
            setUserId(id);
            setLibraryVisibility(value);
            await openLibrary(id);
        }
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, userId }}>
            <Header setLoginStatus={setLoginStatus} setPopupVisibility={setLibraryVisibility}></Header>
            <StyledToggler onClick={setMode}> Zmień widok </StyledToggler>
            <ModeContext.Provider value={viewMode}>
                {libraryVisiblity && <Documents setVisibility={setLibraryVisibility} docs={documents} />}
                <Container>
                    <Editor changeBuffer={changeBuffer} distanceFromTop={scrollTop} changeScrollTop={changeScrollTop} />
                    <Preview value={buffer} distanceFromTop={scrollTop} changeScrollTop={changeScrollTop} />
                </Container>
            </ModeContext.Provider>
        </LoginContext.Provider>
    );
};

export default Main;
