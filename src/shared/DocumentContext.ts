import React from 'react';

const DocumentContext = React.createContext({
    documentMode: 'local',
    documentId: '',
    createNewDocument: () => new Promise(Promise.resolve),
    loadDocument: (id: string) => new Promise(Promise.resolve),
    buffer: '',
    changeBuffer: (newBuffer: string) => {}
});

export default DocumentContext;
