import ReactMarkdown from 'react-markdown';
import React, { Dispatch, SetStateAction, useEffect, useState, useContext } from 'react';
import { StyledInlineCode } from './PreviewStyle';
import styled from 'styled-components';
import { ModeContext } from '../../shared/ModeContext';

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

export default function Preview(props: Props) {
    const [itemRefs] = useState<HTMLDivElement[]>([]);

    useEffect(() => {
        console.log(props.distanceFromTop);
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
}
