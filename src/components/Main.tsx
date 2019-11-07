import firebase from 'firebase/app';
import 'firebase/firestore';
import React, { useState } from 'react';
import LoginContext from '../shared/loginContext';
import { ModeContext, modes } from '../shared/ModeContext';
import DocumentContext from '../shared/DocumentContext';
import Documents from './Documents/Documents';
import Editor from './Editor/Editor';
import Header from './Header/Header';
import Preview from './Preview/Preview';
import { Container, StyledToggler } from './styled.js';

interface Document {
    id: string;
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
    const [documentId, setDocumentId] = useState('');
    const [documentMode, setDocumentMode] = useState('local');

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
                newEl.id = doc.id;
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

    const createNewDocument = async () => {
        const db = firebase.firestore();
        try {
            const newContent = await db.collection(`users/${userId}/articles`).add({
                content: 'New content',
                title: 'New document'
            });
            // await openLibrary(userId);
            setDocumentId(newContent.id);
            changeBuffer('New content');
            setDocumentMode('firebase');
            localStorage.setItem('firebaseContent', 'newContent');
            setLibraryVisibility(false);
        } catch (e) {
            console.error(e);
        }
    };

    const loadDocument = async (id: string) => {
        const currentDocument = documents.filter(doc => doc.id === id);
        if (currentDocument.length) {
            const { title, content, id } = currentDocument[0];
            setDocumentId(id);
            changeBuffer(content);
            setDocumentMode('firebase');
            setTitle(title);
            localStorage.setItem('firebaseContent', content);
            setLibraryVisibility(false);
        }
    };

    return (
        <DocumentContext.Provider
            value={{ documentMode, documentId, createNewDocument, loadDocument, buffer, changeBuffer }}
        >
            <LoginContext.Provider value={{ isLoggedIn, userId }}>
                <Header setLoginStatus={setLoginStatus} setPopupVisibility={setLibraryVisibility}></Header>
                <StyledToggler onClick={setMode}> Zmień widok </StyledToggler>
                <ModeContext.Provider value={viewMode}>
                    {libraryVisiblity && <Documents setVisibility={setLibraryVisibility} docs={documents} />}
                    <Container>
                        <Editor
                            changeBuffer={changeBuffer}
                            distanceFromTop={scrollTop}
                            changeScrollTop={changeScrollTop}
                        />
                        <Preview value={buffer} distanceFromTop={scrollTop} changeScrollTop={changeScrollTop} />
                    </Container>
                </ModeContext.Provider>
            </LoginContext.Provider>
        </DocumentContext.Provider>
    );
};

export default Main;
