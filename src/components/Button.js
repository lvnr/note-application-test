import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  ${props => props.color ? css`background-color: ${props.color}` : null}
  width: 80px;
  height: 38px;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Button = (props) => {
  return (
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  )
}

export default Button
