import React from 'react'
import * as C from './styles'

const Button = ({Text, onClick, type = "button"}) => {
  return (
    <C.Button type={type}
    onChange={onClick}
    >
      {Text}
    </C.Button>
  )
}

export default Button;