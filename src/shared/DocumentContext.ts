import React from 'react';

const DocumentContext = React.createContext({
    documentId: 0,
    createNewDocument: () => new Promise(Promise.resolve)
});

export default DocumentContext;
