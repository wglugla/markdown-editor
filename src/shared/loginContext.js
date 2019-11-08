import React from 'react';

const LoginContext = React.createContext({
    isLoggedIn: false,
    userId: ''
});

export default LoginContext;
