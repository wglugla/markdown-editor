import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { ModeContext } from '../../shared/ModeContext';
import { StyledInlineCode } from './PreviewStyle';

const PreviewView = styled.div<{ block: boolean }>`
    visibility: ${props => (props.block ? 'visible' : 'hidden')};
    width: ${props => (props.block ? '100%' : '0%')};
    height: 100%;
    padding: ${props => (props.block ? '1rem 2rem' : '0')};
    overflow-wrap: break-word;
    box-sizing: border-box;
    font-size: 12px;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    img {
        max-width: 100%;
    }
    @media (min-width: 900px) {
        visibility: visible;
        width: 50%;
        padding: 1rem 2rem;
    }
`;

export interface Props {
    value: string;
    distanceFromTop: number;
    changeScrollTop: Dispatch<SetStateAction<number>>;
}

const Preview = (props: Props) => {
    const [itemRefs] = useState<HTMLDivElement[]>([]);

    useEffect(() => {
        itemRefs[0].scrollTop = props.distanceFromTop;
    }, [props.distanceFromTop]);

    function inputRef(ref: HTMLDivElement) {
        itemRefs.push(ref);
    }

    const context = useContext(ModeContext);

    return (
        <PreviewView block={context.previewDisplay} ref={inputRef}>
            <ReactMarkdown source={props.value} renderers={{ inlineCode: StyledInlineCode }} />
        </PreviewView>
    );
};

export default Preview;
