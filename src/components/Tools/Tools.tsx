import React from 'react';
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
import Tool from './Tool/Tool';
import { ToolsCase } from './ToolsStyle';

interface Props {
    addStyle: Function;
}

const Tools = (props: Props) => {
    return (
        <ToolsCase>
            <Tool content="**" styleFunction={props.addStyle} cursonBackNumber={2} icon={iconBold} doubleStyle={true} />
            <Tool
                content="_"
                styleFunction={props.addStyle}
                cursonBackNumber={1}
                icon={iconItalic}
                doubleStyle={true}
            />
            <Tool
                content="~~"
                styleFunction={props.addStyle}
                cursonBackNumber={2}
                icon={iconStrike}
                doubleStyle={true}
            />
            <Tool
                content="# "
                styleFunction={props.addStyle}
                cursonBackNumber={2}
                icon={iconHeader}
                doubleStyle={false}
            />
            <Tool content="`" styleFunction={props.addStyle} cursonBackNumber={1} icon={iconCode} doubleStyle={true} />
            <Tool
                content="> "
                styleFunction={props.addStyle}
                cursonBackNumber={2}
                icon={iconQuote}
                doubleStyle={false}
            />
            <Tool
                content="* "
                styleFunction={props.addStyle}
                cursonBackNumber={2}
                icon={iconList}
                doubleStyle={false}
            />
            <Tool
                content="1. "
                styleFunction={props.addStyle}
                cursonBackNumber={3}
                icon={iconNumberedList}
                doubleStyle={false}
            />
            <Tool
                content="- [ ] "
                styleFunction={props.addStyle}
                cursonBackNumber={6}
                icon={iconChecklist}
                doubleStyle={false}
            />
            <Tool
                content="[](https://)"
                styleFunction={props.addStyle}
                cursonBackNumber={1}
                icon={iconChainLink}
                doubleStyle={false}
            />
        </ToolsCase>
    );
};

export default Tools;
