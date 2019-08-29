import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7vh;
  box-sizing: border-box;
  padding: .5em .2rem;
  font-size: .8em;
  color: #000000;
  background: #F8F8F8;
  box-shadow: 0px 6px 15px -3px rgba(0,0,0,0.2);
  z-index: 2;
`

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const StyledTitle = styled.h1`
  font-size: 1.2em;
  margin: 0 0 0 2rem;
  padding: 0;
`

const StyledLink = styled.a`
  margin: .5rem;
  padding: 1rem 2rem;
  color: #000000;
  font-size: 1.1em;
  font-weight: 500;
`


export default function Header() {
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
