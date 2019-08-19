import React, { Component } from 'react'
import Editor from './Editor'
import Preview from './Preview'

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
      <div>
        <Editor changeBuffer={this.changeBuffer}/>
        <Preview value={this.state.buffer}/>
      </div>
    )
  }

  changeBuffer = (newBuffer: string) => {
    this.setState({buffer: newBuffer})
  }
}
