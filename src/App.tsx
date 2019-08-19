import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import styled from 'styled-components'

const Container = styled.div`
    background: #777777;
`

const App: React.FC = () => (
    <div>
        <Header />
        <Main />
    </div>
);
export default App;
