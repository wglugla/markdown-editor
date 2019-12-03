import React from 'react';
import { Icon, StyledButton } from './ToolStyle';

interface Props {
    content: string;
    styleFunction: Function;
    icon: string;
    cursonBackNumber: number;
    doubleStyle: boolean;
}

const Tool = (props: Props) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.styleFunction(props.cursonBackNumber, props.content, props.doubleStyle);
    };

    return (
        <StyledButton onClick={handleClick}>
            <Icon src={props.icon} alt="icon" />
        </StyledButton>
    );
};

export default Tool;
