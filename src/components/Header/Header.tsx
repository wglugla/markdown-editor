import React from 'react';
import { StyledHeader, StyledLink, StyledList, StyledTitle } from './HeaderStyle';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function Header() {
    const config = {
        apiKey: process.env.REACT_APP_FIREBASE_KEY,
        authDomain: 'markdown-editor-4d50f.firebaseapp.com',
        databaseURL: 'https://markdown-editor-4d50f.firebaseio.com',
        projectId: 'markdown-editor-4d50f',
        storageBucket: 'markdown-editor-4d50f.appspot.com',
        messagingSenderId: '598573815004',
        appId: '1:598573815004:web:7caaa87eafdfc96f5b9019',
        measurementId: 'G-0FT5Q28GWV'
    };

    firebase.initializeApp(config);
    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/signed',
        signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID]
    };

    return (
        <StyledHeader>
            <StyledTitle> Markdown editor </StyledTitle>
            <StyledList>
                <li>
                    <StyledLink href="https://github.com/wglugla"> My Github Account </StyledLink>
                </li>
                <li>
                    <StyledLink href="https://github.com/wglugla/markdown-editor"> Repository </StyledLink>
                </li>
                <li>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </li>
            </StyledList>
        </StyledHeader>
    );
}
