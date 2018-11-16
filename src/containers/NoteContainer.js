import React, { Component } from 'react'
import Note from '../components/Note'

class NoteContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { }
  }

  render() {
    return (
      <Note note={this.props.note} />
    )
  }
}

export default NoteContainer
