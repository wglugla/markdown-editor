import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import styled from 'styled-components';

const Container = styled.div`
    /* overflow-y: hidden; */
`

const App: React.FC = () => (
    <Container>
        <Header />
        <Main />
    </Container>
);
export default App;
