import { useState } from 'react'
import './App.css'

import Countdown from './components/Countdown'
import Wishes from './components/Wishes'
import Pictures from './components/Pictures'
import Song from './components/Song'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Countdown birthdate="Aug 6"/> {/* put your birthdate here */}
        <Pictures />
        <Wishes />
        <Song />
      </div>
    </div>
  )
}

export default App