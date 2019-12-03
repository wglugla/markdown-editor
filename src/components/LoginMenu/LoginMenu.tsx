import * as firebase from 'firebase/app';
import 'firebase/auth';
import React, { Dispatch, SetStateAction, useContext, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import LoginContext from '../../shared/loginContext';
import DocumentContext from '../../shared/DocumentContext';
import { StyledMenu, MenuContainer } from './LoginMenuStyle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NotificationSystem, { System } from 'react-notification-system';

const useStyles = makeStyles(theme => ({
    button: {
        margin: '0.5rem'
    }
}));

interface Props {
    setLoginStatus: (value: boolean, id: string) => void;
    setPopupVisibility: Dispatch<SetStateAction<boolean>>;
    menuVisibility: boolean;
    toggleMenu: () => void;
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

    const classes = useStyles();
    const visibility = props.menuVisibility;
    let notificationSystem: React.RefObject<System> = React.createRef();
    return (
        <MenuContainer visibility={visibility ? 1 : 0}>
            <NotificationSystem ref={notificationSystem} />
            {isLoggedIn ? (
                <StyledMenu>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                        onClick={() => {
                            props.toggleMenu();
                            firebase.auth().signOut();
                        }}
                    >
                        Wyloguj się
                    </Button>
                    <Button
                        variant="outlined"
                        color="inherit"
                        className={classes.button}
                        onClick={() => {
                            props.toggleMenu();
                            props.setPopupVisibility(true);
                        }}
                    >
                        Przeglądaj
                    </Button>
                    <Button
                        variant="outlined"
                        color="inherit"
                        className={classes.button}
                        onClick={() => {
                            props.toggleMenu();
                            saveDocument();
                            if (notificationSystem.current) {
                                notificationSystem.current.addNotification({
                                    message: 'Dokument zapisany pomyślnie',
                                    level: 'success'
                                });
                            }
                        }}
                    >
                        Zapisz plik
                    </Button>
                </StyledMenu>
            ) : (
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            )}
        </MenuContainer>
    );
};

export default FirebaseLogin;
