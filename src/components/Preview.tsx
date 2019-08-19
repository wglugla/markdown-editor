import React, { Component } from 'react'
import marked from 'marked'
import styled from 'styled-components'

const PreviewView = styled.div`
  width: 48%;
  height: 100%;
  background-color: #f3f3f3;
  padding: 1rem;
  overflow-wrap: break-word;
  box-sizing: border-box;
`

interface Props {
  value: string
}
interface State {
  
}

export default class Preview extends Component<Props, State> {
  state = {}

  render() {
    return (
      <PreviewView dangerouslySetInnerHTML={this.getMarkdownFromInput()} />
    )
  }

  getMarkdownFromInput = () => {
    let rawMarkup = marked(this.props.value);
    return { __html: rawMarkup};
  }
}
