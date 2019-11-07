import * as firebase from 'firebase/app';
import 'firebase/auth';
import React, { Dispatch, SetStateAction, useContext, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import LoginContext from '../../shared/loginContext';
import DocumentContext from '../../shared/DocumentContext';
import { StyledButton, StyledMenu } from './LoginMenuStyle';

interface Props {
    setLoginStatus: (value: boolean, id: string) => void;
    setPopupVisibility: Dispatch<SetStateAction<boolean>>;
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
    const { saveDocument } = useContext(DocumentContext);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user && !isLoggedIn) {
                props.setLoginStatus(true, user.uid);
            } else if (!isLoggedIn) {
                props.setLoginStatus(false, '');
            }
        });
    });

    return isLoggedIn ? (
        <StyledMenu>
            <StyledButton
                onClick={() => {
                    firebase.auth().signOut();
                }}
            >
                Sign out
            </StyledButton>
            <button onClick={() => props.setPopupVisibility(true)}> Przeglądaj </button>
            <button onClick={() => saveDocument()}> Zapisz plik </button>
        </StyledMenu>
    ) : (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
};

export default FirebaseLogin;
