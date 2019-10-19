import ReactMarkdown from 'react-markdown';
import React, { Dispatch, SetStateAction, useEffect, useState, useContext } from 'react';
import { StyledInlineCode } from './PreviewStyle';
import styled from 'styled-components';
import { ModeContext } from '../../shared/ModeContext';

const PreviewView = styled.div<{ block: boolean }>`
    display: ${props => (props.block ? 'block' : 'none')};
    width: 100%;
    height: 100%;
    padding: 3rem 2rem;
    overflow-wrap: break-word;
    box-sizing: border-box;
    font-size: 12px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;

    @media (min-width: 900px) {
        display: block;
        width: 50%;
        ::before {
            content: 'Preview';
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            align-items: center;
            padding-left: 2rem;
            color: #222222;
            width: 100%;
            height: 5vh;
            background: #ffffff;
        }
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
        if (itemRefs[0]) {
            itemRefs[0].scrollTop = props.distanceFromTop;
        }
    }, [props.distanceFromTop, itemRefs]);

    function inputRef(ref: HTMLDivElement) {
        itemRefs.push(ref);
    }

    let timer: number;

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop } = event.currentTarget;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            props.changeScrollTop(scrollTop);
        }, 20);
    };

    const context = useContext(ModeContext);

    return (
        <PreviewView block={context.previewDisplay} ref={inputRef} onScroll={handleScroll}>
            <ReactMarkdown source={props.value} renderers={{ inlineCode: StyledInlineCode }} />
        </PreviewView>
    );
}
