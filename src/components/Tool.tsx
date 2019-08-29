import React from 'react'

interface Props {
  content: string,
  styleFunction: Function
}

export default function Tool(props: Props) {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.styleFunction(props.content);
  }

  return (
    <button onClick={handleClick}> B </button>
  )
}
