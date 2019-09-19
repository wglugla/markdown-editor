import ReactMarkdown from 'react-markdown';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { PreviewView, StyledInlineCode } from './style';

export interface Props {
    value: string;
    distanceFromTop: number;
    changeScrollTop: Dispatch<SetStateAction<number>>;
}

export default function Preview(props: Props) {
    const [itemRefs] = useState<HTMLDivElement[]>([]);

    useEffect(() => {
        itemRefs[0].scrollTop = props.distanceFromTop;
    }, [props.distanceFromTop]);

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

    return (
        <PreviewView ref={inputRef} onScroll={handleScroll}>
            <ReactMarkdown source={props.value} renderers={{ inlineCode: StyledInlineCode }} />
        </PreviewView>
    );
}
