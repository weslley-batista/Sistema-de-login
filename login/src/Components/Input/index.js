import React from 'react'
import * as C from './styles'

const Input = ({type, placeholder, value, onChange}) => {
  return (
    <C.Input type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
     />
    )
}

export default Input;