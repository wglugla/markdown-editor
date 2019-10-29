import React, { useEffect, useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import LoginContext from '../../shared/loginContext';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    height: auto;
    line-height: normal;
    min-height: 40px;
    padding: 0.7rem 1rem;
    margin: 1rem 0;
    text-align: center;
    color: #ffffff;
    background-color: #333;
    font-size: 14px;
    text-decoration: none;
    border: none;
    cursor: pointer;
`;

interface Props {
    setLoginStatus: (value: boolean) => void;
}

const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID]
};

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

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const FirebaseLogin = (props: Props) => {
    const { isLoggedIn } = useContext(LoginContext);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            props.setLoginStatus(!!user);
        });
    });

    return isLoggedIn ? (
        <StyledButton
            onClick={() => {
                firebase.auth().signOut();
            }}
        >
            Sign out
        </StyledButton>
    ) : (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
};

export default FirebaseLogin;
