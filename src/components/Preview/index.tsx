import marked from 'marked';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { PreviewView } from './style';

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

    const getMarkdownFromInput = () => {
        let rawMarkup = marked(props.value);
        return { __html: rawMarkup };
    };

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

    return <PreviewView ref={inputRef} dangerouslySetInnerHTML={getMarkdownFromInput()} onScroll={handleScroll} />;
}
