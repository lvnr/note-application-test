import React from 'react'
import styled from 'styled-components'
import NoteContainer from '../containers/NoteContainer'
import Button from './Button'

const Wrapper = styled.div`
  padding: 22px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

const Controls = styled.div`
  display: flex;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  h2 {
    font-size: 18px;
    font-weight: 300;
  }
`

const Notepad = ({ notepad }) => {
  const { files } = notepad
  let notes = []

  for (const title in files) {
    if (files.hasOwnProperty(title)) {
      notes.push({
        title,
        note: files[title].content,
      })
    }
  }

  return (
    <Wrapper>
      <Header>
        <Section>
          <label>Notepad title</label>
          <input type="text" placeholder="My notepad title..." />
        </Section>
        <Controls>
          <Button color="#39ACDC" style={{ marginRight: 10 }}>Save</Button>
          <Button color="#EC3646">Delete</Button>
        </Controls>
      </Header>
      <Section>
        <h2>My Notes</h2>
        <input type="text" placeholder="Enter note title..." />
        <textarea placeholder="Enter note..." />
        <Button color="#57B93E">Add</Button>
      </Section>
      <Section>
        {notes && notes.map((note, i) => <NoteContainer key={i} note={note} />)}
      </Section>
    </Wrapper>
  )
}

export default Notepad
