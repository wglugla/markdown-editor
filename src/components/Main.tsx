import React, { useState } from 'react';
import styled from 'styled-components';
import Editor from './Editor/index';
import Preview from './Preview/index';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 93vh;
    overflow-y: hidden;
`;

export default function Main() {
    const [buffer, setBuffer] = useState(``);
    const [scrollTop, changeScrollTop] = useState(0);

    const changeBuffer = (newBuffer: string) => {
        setBuffer(newBuffer);
    };

    return (
        <Container>
            <Editor changeBuffer={changeBuffer} distanceFromTop={scrollTop} changeScrollTop={changeScrollTop} />
            <Preview value={buffer} distanceFromTop={scrollTop} changeScrollTop={changeScrollTop} />
        </Container>
    );
}
