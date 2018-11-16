import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`

const Note = ({ note }) => {
  return (
    <Wrapper>
      <input type="text" placeholder="Enter note title..." defaultValue={note.title} />
      <textarea placeholder="Enter note..." defaultValue={note.note} />
      <Button color="#EC3646">Delete</Button>
    </Wrapper>
  )
}

export default Note
