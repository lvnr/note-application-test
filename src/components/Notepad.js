import React from 'react'
import styled from 'styled-components'
import NoteContainer from '../containers/NoteContainer'

const Wrapper = styled.div`
  padding: 22px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
`

const Notepad = ({ notepad }) => {
  const { files } = notepad
  let notes = []

  for (const title in files) {
    if (files.hasOwnProperty(title)) {
      notes.push({
        title,
      })
    }
  }

  return (
    <Wrapper>
      <Section>
        <label>Notepad title</label>
        <input type="text" placeholder="My notepad title..." />
        <button>Save</button>
        <button>Delete</button>
      </Section>
      <Section>
        <h2>My Notes</h2>
        <input type="text" placeholder="Enter note title..." />
        <textarea placeholder="Enter note..." />
        <button>Add</button>
      </Section>
      <Section>
        {notes && notes.map((note, i) => <NoteContainer key={i} note={note} />)}
      </Section>
    </Wrapper>
  )
}

export default Notepad
