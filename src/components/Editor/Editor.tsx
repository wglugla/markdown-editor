import React, { Dispatch, SetStateAction, useContext, useEffect, useState, createRef } from 'react';
import styled from 'styled-components';
import { ModeContext } from '../../shared/ModeContext';
import DocumentContext from '../../shared/DocumentContext';
import Tools from '../Tools/Tools';
import { StyledTextarea } from './EditorStyle';

export interface Props {
    changeBuffer: (newContent: string) => void;
    distanceFromTop: number;
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

const Editor = (props: Props) => {
    const context = useContext(ModeContext);
    const { documentMode } = useContext(DocumentContext);
    const localStorageSource = documentMode === 'local' ? 'markdownEditorContent' : 'firebaseContent';
    const [selectStart, setSelectStart] = useState(0);
    const [selectEnd, setSelectEnd] = useState(0);
    const [content, setContent] = useState(localStorage.getItem(localStorageSource) || '');

    useEffect(() => {
        setContent(localStorage.getItem(localStorageSource) || '');
    }, [documentMode]);

    useEffect(() => {
        localStorage.setItem(localStorageSource, content);
        props.changeBuffer(content);
    }, [content]);

    let _textarea: React.RefObject<HTMLTextAreaElement> = createRef();

    const addStyle = (shiftChanges: number, styleCode: string, doubleStyle: boolean) => {
        addFocusOnTextarea();
        setContent(prev => {
            let newContent;
            if (doubleStyle === true) {
                newContent = `${prev.substr(0, selectStart)}${styleCode}${prev.substr(
                    selectStart,
                    selectEnd - selectStart
                )}${styleCode}${prev.substr(selectEnd, prev.length - selectEnd)}`;
            } else {
                newContent = `${prev.substr(0, selectStart)}${styleCode}${prev.substr(
                    selectStart,
                    prev.length - selectStart
                )}`;
            }
            setSelectStart(prev => prev + shiftChanges);
            setSelectEnd(prev => prev + shiftChanges);
            return newContent;
        });
    };

    useEffect(() => {
        if (_textarea.current) _textarea.current.setSelectionRange(selectStart, selectEnd);
    });

    useEffect(() => {
        if (_textarea.current) _textarea.current.scrollTop = props.distanceFromTop;
    }, []);

    const setCursorPosition = (selectStart: number, selectEnd: number) => {
        setSelectStart(selectStart || 0);
        setSelectEnd(selectEnd || 0);
    };

    const addFocusOnTextarea = () => {
        if (_textarea.current) {
            _textarea.current.focus();
        }
    };

    const handleScroll = (event: React.UIEvent<HTMLTextAreaElement>) => {
        const { scrollTop } = event.currentTarget;
        props.changeScrollTop(scrollTop);
    };

    return (
        <StyledForm block={context.editorDisplay}>
            <Tools addStyle={addStyle} />
            <StyledTextarea
                ref={_textarea}
                value={content}
                onChange={e => {
                    const { selectionStart, selectionEnd } = e.target;
                    setCursorPosition(selectionStart, selectionEnd);
                    setContent(e.target.value);
                }}
                onFocus={e => {
                    const { selectionStart, selectionEnd } = e.target;
                    setCursorPosition(selectionStart, selectionEnd);
                    setContent(e.target.value);
                }}
                onKeyUp={e => {
                    const { selectionStart, selectionEnd } = e.currentTarget;
                    setCursorPosition(selectionStart, selectionEnd);
                }}
                onMouseUp={e => {
                    const { selectionStart, selectionEnd } = e.currentTarget;
                    setCursorPosition(selectionStart, selectionEnd);
                }}
                onScroll={handleScroll}
                autoFocus
            />
        </StyledForm>
    );
};

export default Editor;
