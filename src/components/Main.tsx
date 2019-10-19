import React, { useState } from 'react';
import styled from 'styled-components';
import Editor from './Editor/Editor';
import Preview from './Preview/Preview';
import { ModeContext, modes } from '../shared/ModeContext';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 90vh;
    overflow-y: hidden;
`;

const StyledToggler = styled.button`
    @media (min-width: 900px) {
        display: none;
    }
`;

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
            <StyledToggler onClick={setMode}> swap </StyledToggler>
            <ModeContext.Provider value={viewMode}>
                <Container>
                    <Editor changeBuffer={changeBuffer} distanceFromTop={scrollTop} changeScrollTop={changeScrollTop} />
                    <Preview value={buffer} distanceFromTop={scrollTop} changeScrollTop={changeScrollTop} />
                </Container>
            </ModeContext.Provider>
        </>
    );
}
