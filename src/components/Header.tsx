import React, { Component } from 'react'

interface Props {
  
}
interface State {
  
}

export default class Header extends Component<Props, State> {
  state = {}
  render() {
    return (
      <header>
        <h1> Markdown-editor using React with Typescript </h1>
        <ul>
          <li>
            <a href="https://github.com/wglugla"> My Github Account </a>
            <a href="https://github.com/wglugla/markdown-editor"> Repository </a>
          </li>
        </ul>
      </header>
    )
  }
}
