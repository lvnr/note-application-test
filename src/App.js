import React, { Component } from 'react'
import NotepadContainer from './containers/NotepadContainer'

class App extends Component {
  render() {
    return (
      <div>
        <header>Notepad Application</header>
        <main>
          <NotepadContainer />
        </main>
      </div>
    )
  }
}

export default App
