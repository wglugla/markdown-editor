import React from 'react';
import { Icon, StyledButton } from './style';

interface Props {
    content: string;
    styleFunction: Function;
    icon: string;
}

export default function Tool(props: Props) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.styleFunction(props.content);
    };

    return (
        <StyledButton onClick={handleClick}>
            <Icon src={props.icon} alt="icon" />
        </StyledButton>
    );
}
