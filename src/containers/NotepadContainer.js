import React, { Component } from 'react'
import { Row, Col } from 'antd'
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
    // const notebook = await createNotebook('testing1', { 'Note 1': { content: 'test note body' } })
    // const deleted = await deleteNotebook("f2fcb95d99a5e0f24b64578fd9c6f5db")
    this.fetchNotepads()
  }

  fetchNotepads = async () => {
    const notebooks = await getNotebooks()
    this.setState({ notebooks, loading: false })
  }

  render() {
    const { notebooks, loading } = this.state
    console.log(notebooks);

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
