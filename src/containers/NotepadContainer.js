import React, { Component } from 'react'
import styled from 'styled-components'
import { getNotebooks, createNotebook, updateNotebook, deleteNotebook } from '../api'
import Notepad from '../components/Notepad'

const Wrapper = styled.div`
  padding: 30px;
`

class NotepadContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      notebooks: [],
    }
  }

  componentDidMount() {
    this.fetchNotepads()
  }

  fetchNotepads = async () => {
    const notebooks = await getNotebooks()
    this.setState({ notebooks, loading: false })
  }

  render() {
    const { notebooks, loading } = this.state

    return (
      <Wrapper>
        {notebooks && notebooks.map((notepad, i) => (
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
