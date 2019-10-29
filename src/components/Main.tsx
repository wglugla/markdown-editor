import React, { useState } from 'react';
import Editor from './Editor/Editor';
import Preview from './Preview/Preview';
import { ModeContext, modes } from '../shared/ModeContext';
import { StyledToggler, Container } from './styled.js';

export default function Main() {
    const [viewMode, setViewMode] = useState(modes.editor);
    const [buffer, setBuffer] = useState(``);
    const [scrollTop, changeScrollTop] = useState(0);

    const changeBuffer = (newBuffer: string) => {
        setBuffer(newBuffer);
    };

    const setMode = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setViewMode(prev => (prev === modes.editor ? modes.preview : modes.editor));
    };

    return (
        <>
            <StyledToggler onClick={setMode}> Zmień widok </StyledToggler>
            <ModeContext.Provider value={viewMode}>
                <Container>
                    <Editor changeBuffer={changeBuffer} distanceFromTop={scrollTop} changeScrollTop={changeScrollTop} />
                    <Preview value={buffer} distanceFromTop={scrollTop} changeScrollTop={changeScrollTop} />
                </Container>
            </ModeContext.Provider>
        </>
    );
}
