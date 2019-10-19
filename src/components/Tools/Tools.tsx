import React from 'react';
import Tool from './Tool/Tool';
import { ToolsCase } from './ToolsStyle';

import iconBold from '../../assets/images/001-bold-text-option.svg';
import iconItalic from '../../assets/images/002-italicize-text.svg';
import iconStrike from '../../assets/images/003-striketrought.svg';
import iconHeader from '../../assets/images/004-header.svg';
import iconCode from '../../assets/images/005-coding.svg';
import iconQuote from '../../assets/images/006-right-quotation-mark.svg';
import iconList from '../../assets/images/007-list.svg';
import iconNumberedList from '../../assets/images/008-numbered-list.svg';
import iconChecklist from '../../assets/images/009-check.svg';
import iconChainLink from '../../assets/images/010-chain-links.svg';

interface Props {
    addStyle: Function;
}

function Tools(props: Props) {
    return (
        <ToolsCase>
            <Tool content="****" styleFunction={props.addStyle} cursonBackNumber={2} icon={iconBold} />
            <Tool content="__" styleFunction={props.addStyle} cursonBackNumber={1} icon={iconItalic} />
            <Tool content="~~~~" styleFunction={props.addStyle} cursonBackNumber={2} icon={iconStrike} />
            <Tool content="# " styleFunction={props.addStyle} cursonBackNumber={2} icon={iconHeader} />
            <Tool content="``" styleFunction={props.addStyle} cursonBackNumber={1} icon={iconCode} />
            <Tool content="> " styleFunction={props.addStyle} cursonBackNumber={2} icon={iconQuote} />
            <Tool content="* " styleFunction={props.addStyle} cursonBackNumber={2} icon={iconList} />
            <Tool content="1. " styleFunction={props.addStyle} cursonBackNumber={3} icon={iconNumberedList} />
            <Tool content="- [ ] " styleFunction={props.addStyle} cursonBackNumber={6} icon={iconChecklist} />
            <Tool content="[](https://)" styleFunction={props.addStyle} cursonBackNumber={1} icon={iconChainLink} />
        </ToolsCase>
    );
}

export default Tools;
