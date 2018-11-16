import React, { Component } from 'react'
import styled from 'styled-components'
import { getNotepads, createNotepad, updateNotepad, deleteNotepad } from '../api'
import Notepad from '../components/Notepad'

const Wrapper = styled.div`
  padding: 30px;
`

class NotepadContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      Notepads: [],
    }
  }

  componentDidMount() {
    this.fetchNotepads()
  }

  fetchNotepads = async () => {
    const Notepads = await getNotepads()
    this.setState({ Notepads, loading: false })
  }

  render() {
    const { Notepads, loading } = this.state

    return (
      <Wrapper>
        {Notepads && Notepads.map((notepad, i) => (
          <Notepad
            key={i}
            notepad={notepad}
            fetchNotepads={this.fetchNotepads}
          />
        ))}
      </Wrapper>
    )
  }
}

export default NotepadContainer
