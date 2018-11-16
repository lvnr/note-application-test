import React, { Component } from 'react'
import { Row, Col } from 'antd'

class NotepadContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      notebooks: [],
    }
  }

  render() {
    const { notebooks, loading } = this.state

    return (
      <div />
    )
  }
}

export default NotepadContainer
