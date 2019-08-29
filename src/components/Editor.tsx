import React, { useState, useEffect } from 'react';
import Tools from './Tools'
import styled from 'styled-components';

const StyledForm = styled.form`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const StyledTextarea = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
    background-color: #1E2126;
    color: #abb2bf;
    overflow-y: scroll;
`;

export interface Props {
    changeBuffer: (newContent: string) => void;
}

export default function Editor(props: Props) {
    const [value, setValue] = useState(
        localStorage.getItem('markdownEditorContent') || ''
    );

    const [cursorPosition, setCursorPosition] = useState(0);

    const [itemRefs, setItemRefs] = useState(new Array());

    const [halfStyleLength, setHalfStyleLength] = useState(0);

    useEffect(() => {
        itemRefs[0].scrollTop = 0;
    }, []);

    useEffect(() => {
        localStorage.setItem('markdownEditorContent', value);
        props.changeBuffer(value);
        let currentPosition = cursorPosition + halfStyleLength;
        itemRefs[0].setSelectionRange(currentPosition, currentPosition);
        setHalfStyleLength(0);
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let { value, selectionStart } = event.target;
        setValue(value);
        props.changeBuffer(value);
        setCursorPosition(selectionStart);
    };

    const addStyle = (styleFormat: string) => {
        let front = value.substr(0, cursorPosition);
        let back = value.substr(cursorPosition, value.length);
        setValue(`${front}${styleFormat} ${back}`);
        setHalfStyleLength(styleFormat.length / 2);

    }
    const handleCursorMove = (event: React.FormEvent<HTMLTextAreaElement>) => {
        const { selectionStart } = event.currentTarget;
        setCursorPosition(selectionStart)
    }

    function inputRef(ref: React.Ref<HTMLTextAreaElement>) {
        let items = itemRefs;
        items.push(ref);
        setItemRefs(items);
    }

    const handleBlur = (event: React.FormEvent<HTMLTextAreaElement>) => {
        event.currentTarget.select();
        let currentPosition = cursorPosition + halfStyleLength;
        event.currentTarget.setSelectionRange(currentPosition, currentPosition);
    }

    return (
        <StyledForm>
            <Tools addStyle={addStyle} />
            <Textarea ref={inputRef} value={value} onBlur={handleBlur} onChange={handleChange} onKeyDown={handleCursorMove} onMouseUp={handleCursorMove} />
        </StyledForm>
    );
}

export interface RefProps {
    value: string
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    onKeyDown: (event: React.FormEvent<HTMLTextAreaElement>) => void
    onMouseUp: (event: React.FormEvent<HTMLTextAreaElement>) => void
    onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void

}

const Textarea = React.forwardRef((props: RefProps, ref: any) => {
    return (
        <StyledTextarea ref={ref} autoFocus value={props.value} onBlur={props.onBlur} onChange={props.onChange} onKeyDown={props.onKeyDown} onMouseUp={props.onMouseUp} />
    )
})

