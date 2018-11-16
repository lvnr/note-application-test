import React, { Component } from 'react'
import styled from 'styled-components'
import { getNotebooks, createNotebook, updateNotebook, deleteNotebook } from '../api'
import Note from './Note'
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
  max-width: 500px;

  h2 {
    font-size: 18px;
    font-weight: 300;
  }
`

class Notepad extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.notepad ? this.props.notepad.description : '',
      files: this.props.notepad ? this.props.notepad.files : {},
      newNoteTitle: '',
      newNoteContent: '',
    }
  }

  updateNotepad = async () => {
    const { title, files } = this.state
    const { id } = this.props.notepad
    const updatedNotes = {}

    if (title.length > 255 || title.length <= 0) {
      console.error('Notepad title should be between 1 and 255 characters')
      return
    }

    if (Object.keys(files).length <= 0) {
      console.error('Notepad should have at least one note')
      return
    }

    for (const title in files) {
      updatedNotes[title] = {
        filename: title,
        content: files[title].content,
      }
    }

    await updateNotebook(id, title, updatedNotes)
    this.props.fetchNotepads()
  }

  deleteNotepad = async () => {
    await deleteNotebook(this.props.notepad.id)
    this.props.fetchNotepads()
  }

  handleTitleUpdate = (e) => {
    this.setState({ title: e.target.value })
  }

  handleNewNoteTitleUpdate = (e) => {
    this.setState({ newNoteTitle: e.target.value })
  }

  handleNewNoteContentUpdate = (e) => {
    this.setState({ newNoteContent: e.target.value })
  }

  addNote = async () => {
    const { title, newNoteTitle, newNoteContent, files } = this.state
    const { id } = this.props.notepad

    if (newNoteTitle.length > 255 || newNoteTitle.length <= 0) {
      console.error('Note title should be between 1 and 255 characters')
      return
    }

    for (const filename in files) {
      if (filename === newNoteTitle) {
        console.error('Note title should be unique')
        return
      }
    }

    if (newNoteContent.length > 1000 || newNoteContent.length <= 0) {
      console.error('Note should be between 1 and 1000 characters')
      return
    }

    const notes = {
      [newNoteTitle]: {
        filename: newNoteTitle,
        content: newNoteContent,
      },
    }

    await updateNotebook(id, title, notes)

    this.setState({ newNoteTitle: '', newNoteContent: '' })
  }

  deleteNote = async (noteTitle) => {
    const { title } = this.state
    const { id } = this.props.notepad

    const notes = {
      [noteTitle]: { filename: null, content: '' },
    }

    await updateNotebook(id, title, notes)
  }

  render() {
    const { deleteNotepad, updateNotepad } = this.props
    const { files } = this.state
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
            <input
              type="text"
              onChange={this.handleTitleUpdate}
              placeholder="My notepad title..."
              value={this.state.title}
            />
          </Section>
          <Controls>
            <Button
              color="#39ACDC"
              style={{ marginRight: 10 }}
              onClick={this.updateNotepad}
            >
              Save
            </Button>
            <Button
              color="#EC3646"
              onClick={this.deleteNotepad}
            >
              Delete
            </Button>
          </Controls>
        </Header>
        <Section>
          <h2>My Notes</h2>
          <input
            type="text"
            onChange={this.handleNewNoteTitleUpdate}
            placeholder="Enter note title..."
            value={this.state.newNoteTitle}
          />
          <textarea
            rows="5"
            onChange={this.handleNewNoteContentUpdate}
            placeholder="Enter note..."
            value={this.state.newNoteContent}
          />
          <Button
            color="#57B93E"
            onClick={this.addNote}
          >
            Add
          </Button>
        </Section>
        <Section>
          {notes && notes.map((note, i) => <Note key={i} note={note} deleteNote={this.deleteNote} />)}
        </Section>
      </Wrapper>
    )
  }
}

export default Notepad
