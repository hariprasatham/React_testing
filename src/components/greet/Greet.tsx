import React from 'react'
import { propsTypes } from './Greet.types'

const Greet = (props: propsTypes) => {

  return (
    <div>Greet {props.name}</div>
  )
}

export default Greet