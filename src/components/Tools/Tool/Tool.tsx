import React from 'react';
import { Icon, StyledButton } from './ToolStyle';

interface Props {
    content: string;
    styleFunction: Function;
    icon: string;
    cursonBackNumber: number;
}

const Tool = (props: Props) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.styleFunction(props.content, props.cursonBackNumber);
    };

    return (
        <StyledButton onClick={handleClick}>
            <Icon src={props.icon} alt="icon" />
        </StyledButton>
    );
};

export default Tool;
