import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const StyledTitle = styled.h1`
  font-size: 1.2em;
  margin: 0;
  padding: 0;
`

const StyledLink = styled.a`
  margin: .5rem;
  padding: 1rem 2rem;
  color: #3c55dc;
`

interface Props {
  
}
interface State {
  
}

export default class Header extends Component<Props, State> {
  state = {}
  render() {
    return (
      <StyledHeader>
        <StyledTitle> Markdown-editor using React with Typescript </StyledTitle>
        <StyledList>
          <li>
            <StyledLink href="https://github.com/wglugla"> My Github Account </StyledLink>
            <StyledLink href="https://github.com/wglugla/markdown-editor"> Repository </StyledLink>
          </li>
        </StyledList>
      </StyledHeader>
    )
  }
}
