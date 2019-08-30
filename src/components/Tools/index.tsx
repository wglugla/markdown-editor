import React from 'react';
import Tool from './Tool';
import { ToolsCase } from './style';

interface Props {
    addStyle: Function;
}

function Tools(props: Props) {
    return (
        <ToolsCase>
            <Tool content="****" styleFunction={props.addStyle} value="B" />
            <Tool content="__" styleFunction={props.addStyle} value="I" />
            <Tool content="----" styleFunction={props.addStyle} value="S" />
            <Tool content="# Header" styleFunction={props.addStyle} value="H" />
        </ToolsCase>
    );
}

export default Tools;
