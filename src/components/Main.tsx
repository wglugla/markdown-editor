import React, { useState, useContext, useReducer } from 'react';
import Header from './Header/Header';
import Editor from './Editor/Editor';
import Preview from './Preview/Preview';
import { ModeContext, modes } from '../shared/ModeContext';
import { StyledToggler, Container } from './styled.js';
import LoginContext from '../shared/loginContext';

export default function Main() {
    const [viewMode, setViewMode] = useState(modes.editor);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState('');
    const [buffer, setBuffer] = useState(``);
    const [scrollTop, changeScrollTop] = useState(0);

    const changeBuffer = (newBuffer: string) => {
        setBuffer(newBuffer);
    };

    const setMode = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setViewMode(prev => (prev === modes.editor ? modes.preview : modes.editor));
    };

    const setLoginStatus = (value: boolean, id: string) => {
        setIsLoggedIn(value);
        setUserId(id);
    };

    return (
        <>
            <LoginContext.Provider value={{ isLoggedIn, userId }}>
                <Header setLoginStatus={setLoginStatus}></Header>
                <StyledToggler onClick={setMode}> Zmień widok </StyledToggler>
                <ModeContext.Provider value={viewMode}>
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
        </>
    );
}
