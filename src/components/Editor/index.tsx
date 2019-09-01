import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Tools from '../Tools';
import { StyledForm, StyledTextarea } from './style';

export interface Props {
    changeBuffer: (newContent: string) => void;
    distanceFromTop: Number;
    changeScrollTop: Dispatch<SetStateAction<number>>;
}

export default function Editor(props: Props) {
    const [value, setValue] = useState(localStorage.getItem('markdownEditorContent') || '');

    const [cursorPosition, setCursorPosition] = useState(0);

    const [itemRefs, setItemRefs] = useState(new Array());

    const [halfStyleLength, setHalfStyleLength] = useState(0);

    useEffect(() => {
        itemRefs[0].scrollTop = 0;
    }, []);

    useEffect(() => {
        itemRefs[0].scrollTop = props.distanceFromTop;
    }, [props.distanceFromTop]);

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

    const addStyle = (styleFormat: string, cursorBackNumber: number) => {
        let front = value.substr(0, cursorPosition);
        let back = value.substr(cursorPosition, value.length);
        setValue(`${front}${styleFormat} ${back}`);
        setHalfStyleLength(cursorBackNumber);
    };
    const handleCursorMove = (event: React.FormEvent<HTMLTextAreaElement>) => {
        const { selectionStart } = event.currentTarget;
        setCursorPosition(selectionStart);
    };

    function inputRef(ref: React.Ref<HTMLTextAreaElement>) {
        let items = itemRefs;
        items.push(ref);
        setItemRefs(items);
    }

    const handleBlur = (event: React.FormEvent<HTMLTextAreaElement>) => {
        event.currentTarget.select();
        let currentPosition = cursorPosition + halfStyleLength;
        event.currentTarget.setSelectionRange(currentPosition, currentPosition);
    };

    let timer: number;

    const handleScroll = (event: React.UIEvent<HTMLTextAreaElement>) => {
        const { scrollTop } = event.currentTarget;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            props.changeScrollTop(scrollTop);
        }, 20);
    };

    const changeOnScroll = (position: number) => {};

    return (
        <StyledForm>
            <Tools addStyle={addStyle} />
            <Textarea
                ref={inputRef}
                value={value}
                onBlur={handleBlur}
                onChange={handleChange}
                onKeyDown={handleCursorMove}
                onMouseUp={handleCursorMove}
                onScroll={handleScroll}
            />
        </StyledForm>
    );
}

export interface RefProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyDown: (event: React.FormEvent<HTMLTextAreaElement>) => void;
    onMouseUp: (event: React.FormEvent<HTMLTextAreaElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onScroll: (event: React.UIEvent<HTMLTextAreaElement>) => void;
}

const Textarea = React.forwardRef((props: RefProps, ref: any) => {
    return (
        <StyledTextarea
            ref={ref}
            autoFocus
            value={props.value}
            onBlur={props.onBlur}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
            onMouseUp={props.onMouseUp}
            onScroll={props.onScroll}
        />
    );
});
