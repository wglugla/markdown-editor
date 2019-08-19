import React, { Component } from 'react';

interface Props {
    changeBuffer: any
}
interface State {}

export default class Editor extends Component<Props, State> {
    state = {
        value: ''
    };

    render() {
        return (
            <form>
                <textarea value={this.state.value} onChange={this.handleChange} />
            </form>
        );
    }

    handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newContent = event.target.value;
        this.setState({value: newContent});
        this.props.changeBuffer(newContent);
    }
}
