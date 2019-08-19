import React, { Component } from 'react';
import styled from 'styled-components'

const StyledForm = styled.form`
    width: 48%;
    height: 100%;
`
const StyledTextarea = styled.textarea`
    width: 100%;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
`

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
            <StyledForm>
                <StyledTextarea value={this.state.value} onChange={this.handleChange} />
            </StyledForm>
        );
    }

    handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newContent = event.target.value;
        this.setState({value: newContent});
        this.props.changeBuffer(newContent);
    }
}
