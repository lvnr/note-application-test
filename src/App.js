import React, { Component } from 'react'
import styled from 'styled-components'
import NotepadContainer from './containers/NotepadContainer'

const MainTitle = styled.h1`
  font-size: 24px;
  margin: 30px 0 0 50px;
  font-weight: 300;
`

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <MainTitle>Notepad Application</MainTitle>
        </header>
        <main>
          <NotepadContainer />
        </main>
      </div>
    )
  }
}

export default App
