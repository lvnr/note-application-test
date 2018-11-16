import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Note = ({ note }) => {
  console.log(note);
  return (
    <Wrapper>
      <input type="text" placeholder="Enter note title..." value={note.filename} />
      <textarea placeholder="Enter note..." value={note.content} />
      <button>Delete</button>
    </Wrapper>
  )
}

export default Note
