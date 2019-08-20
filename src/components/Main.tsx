import React, { useState } from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import Preview from './Preview';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80vh;
  padding: 0 2rem;
`

export default function Main({ }) {
  const [buffer, setBuffer] = useState(`Preview here!`);

  const changeBuffer = (newBuffer: string) => {
    setBuffer(newBuffer);
  }
  return (
    <Container>
      <Editor changeBuffer={changeBuffer} />
      <Preview value={buffer} />
    </Container>
  )


}
