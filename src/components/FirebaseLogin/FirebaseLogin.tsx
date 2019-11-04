import React, { useEffect, useContext, Dispatch, SetStateAction } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebase from 'firebase/app';
import LoginContext from '../../shared/loginContext';
import styled from 'styled-components';
import UserMenu from '../UserMenu/UserMenu';

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

const StyledMenu = styled.div`
    display: flex;
    align-items: center;
`;

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
    const { isLoggedIn, userId } = useContext(LoginContext);
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
            <UserMenu userId={userId} />
            <button onClick={() => props.setPopupVisibility(true)}> Przeglądaj </button>
        </StyledMenu>
    ) : (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
};

export default FirebaseLogin;
