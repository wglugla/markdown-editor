import React from 'react'
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

export interface Props {
  value: string
}

export default function Preview(props: Props) {
  const getMarkdownFromInput = () => {
    let rawMarkup = marked(props.value);
    return { __html: rawMarkup };
  }

  return (
    <PreviewView dangerouslySetInnerHTML={getMarkdownFromInput()} />
  )


}
