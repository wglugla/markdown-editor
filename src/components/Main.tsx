import React, { Component } from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import Preview from './Preview';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80vh;
  padding: 0 2rem;
`

interface Props {
  
}
interface State {
  
}

export default class Main extends Component<Props, State> {
  state = {
    buffer: `Preview here!`
  }

  render() {
    return (
      <Container>
        <Editor changeBuffer={this.changeBuffer}/>
        <Preview value={this.state.buffer}/>
      </Container>
    )
  }

  changeBuffer = (newBuffer: string) => {
    this.setState({buffer: newBuffer})
  }
}
