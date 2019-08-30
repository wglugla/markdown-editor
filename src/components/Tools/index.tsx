import React from 'react';
import Tool from './Tool';
import { ToolsCase } from './style';

import iconBold from '../../assets/images/001-bold-text-option.svg';
import iconItalic from '../../assets/images/002-italicize-text.svg';
import iconStrike from '../../assets/images/003-striketrought.svg';
import iconHeader from '../../assets/images/004-header.svg';

interface Props {
    addStyle: Function;
}

function Tools(props: Props) {
    return (
        <ToolsCase>
            <Tool content="****" styleFunction={props.addStyle} icon={iconBold} />
            <Tool content="__" styleFunction={props.addStyle} icon={iconItalic} />
            <Tool content="----" styleFunction={props.addStyle} icon={iconStrike} />
            <Tool content="# Header" styleFunction={props.addStyle} icon={iconHeader} />
        </ToolsCase>
    );
}

export default Tools;
