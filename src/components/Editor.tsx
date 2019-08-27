import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    width: 50%;
    height: 100%;
`;
const StyledTextarea = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
    background-color: #1E2126;
    color: #abb2bf;
    overflow-y: scroll;;
`;

export interface Props {
    changeBuffer: (newContent: string) => void;
}

export default function Editor(props: Props) {
    const [value, setValue] = useState(
        localStorage.getItem('markdownEditorContent') || ''
    );

    useEffect(() => {
        localStorage.setItem('markdownEditorContent', value);
        props.changeBuffer(value);
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let { value } = event.target;
        setValue(value);
        props.changeBuffer(value);
    };

    return (
        <StyledForm>
            <StyledTextarea value={value} onChange={handleChange} />
        </StyledForm>
    );
}
