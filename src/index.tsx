import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import Main from './components/Main';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <>
        {/* <Header /> */}
        <Main />
    </>,
    document.getElementById('root')
);

serviceWorker.unregister();
