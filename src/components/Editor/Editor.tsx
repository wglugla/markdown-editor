import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModeContext } from '../../shared/ModeContext';
import DocumentContext from '../../shared/DocumentContext';
import Tools from '../Tools/Tools';
import { StyledTextarea } from './EditorStyle';

export interface Props {
    changeBuffer: (newContent: string) => void;
    distanceFromTop: Number;
    changeScrollTop: Dispatch<SetStateAction<number>>;
    value: string;
}

export interface RefProps {
    editorContent: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyDown: (event: React.FormEvent<HTMLTextAreaElement>) => void;
    onMouseUp: (event: React.FormEvent<HTMLTextAreaElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onScroll: (event: React.UIEvent<HTMLTextAreaElement>) => void;
}

const StyledForm = styled.form<{ block: boolean }>`
    display: ${props => (props.block ? 'block' : 'none')};
    background: gray;
    width: 100%;
    overflow: hidden;
    @media (min-width: 900px) {
        width: 50%;
    }
`;

const Textarea = React.forwardRef((props: RefProps, ref: any) => {
    return (
        <StyledTextarea
            ref={ref}
            autoFocus
            value={props.editorContent}
            onBlur={props.onBlur}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
            onMouseUp={props.onMouseUp}
            onScroll={props.onScroll}
        />
    );
});

const Editor = (props: Props) => {
    const { documentMode } = useContext(DocumentContext);
    const localStorageSource = documentMode === 'local' ? 'markdownEditorContent' : 'firebaseContent';
    const [editorContent, setValue] = useState(localStorage.getItem(localStorageSource) || '');

    const [cursorPosition, setCursorPosition] = useState(0);
    /*eslint no-array-constructor: 0*/
    const [itemRefs, setItemRefs] = useState(new Array());

    const [halfStyleLength, setHalfStyleLength] = useState(0);

    useEffect(() => {
        setValue(localStorage.getItem(localStorageSource) || '');
    }, [documentMode]);

    useEffect(() => {
        if (itemRefs[0]) {
            itemRefs[0].scrollTop = 0;
        }
    }, [itemRefs]);

    useEffect(() => {
        itemRefs[0].scrollTop = props.distanceFromTop;
    }, []);

    useEffect(() => {
        localStorage.setItem(localStorageSource, editorContent);
        let currentPosition = cursorPosition + halfStyleLength;
        if (itemRefs[0]) {
            itemRefs[0].setSelectionRange(currentPosition, currentPosition);
        }
        setHalfStyleLength(0);
    }, [editorContent, itemRefs, cursorPosition, halfStyleLength, props]);

    const updateWithStyle = (content: string) => {
        props.changeBuffer(content);
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let { value, selectionStart } = event.target;
        setValue(value);
        props.changeBuffer(value);
        setCursorPosition(selectionStart);
    };

    const addStyle = (styleFormat: string, cursorBackNumber: number) => {
        let front = editorContent.substr(0, cursorPosition);
        let back = editorContent.substr(cursorPosition, editorContent.length);
        setValue(`${front}${styleFormat} ${back}`);
        setHalfStyleLength(cursorBackNumber);
        updateWithStyle(`${front}${styleFormat} ${back}`);
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

    const handleScroll = (event: React.UIEvent<HTMLTextAreaElement>) => {
        const { scrollTop } = event.currentTarget;
        props.changeScrollTop(scrollTop);
    };

    const context = useContext(ModeContext);

    return (
        <StyledForm block={context.editorDisplay}>
            <Tools addStyle={addStyle} />
            <Textarea
                ref={inputRef}
                editorContent={props.value}
                onBlur={handleBlur}
                onChange={handleChange}
                onKeyDown={handleCursorMove}
                onMouseUp={handleCursorMove}
                onScroll={handleScroll}
            />
        </StyledForm>
    );
};

export default Editor;
