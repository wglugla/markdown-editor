import React from 'react';

interface Props {
    content: string;
    styleFunction: Function;
    value: string;
}

export default function Tool(props: Props) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.styleFunction(props.content);
    };

    return <button onClick={handleClick}> {props.value} </button>;
}
