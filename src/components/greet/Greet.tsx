import React from 'react'

type propsTypes  =  {
  name?: string
}

const Greet = (props: propsTypes) => {
  return (
    <div>Greet {props.name}</div>
  )
}

export default Greet