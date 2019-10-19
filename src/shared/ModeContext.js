import React from 'react';

export const modes = {
    editor: {
        editorDisplay: true,
        previewDisplay: false
    },
    preview: {
        editorDisplay: false,
        previewDisplay: true
    }
};

export const ModeContext = React.createContext(modes.editor);
