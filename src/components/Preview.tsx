import React, { Component } from 'react'

interface Props {
  value: string
}
interface State {
  
}

export default class Preview extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        <p>{this.props.value}</p>
      </div>
    )
  }
}
