import React from 'react';
import styled from 'styled-components';
import Tool from './Tool';

const ToolsCase = styled.div`
    width: 100%;
    height: 5vh;
    background: #111111;
`

interface Props {
  addStyle: Function
}

function Tools(props: Props) {
  return (
    <ToolsCase>
      <Tool content='****' styleFunction={props.addStyle} />
    </ToolsCase >
  )
}

export default Tools
