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
        <Countdown birthdate="Aug 25"/> {/* put your birthdate here */}
        <Pictures />
        <Wishes />
        <Song />
      </div>
      <br /><p>~ Made by: Kevin</p>
      <p>feedbacks are encouraged: <a href="#">indrayana.kevin@gmail.com</a></p>
    </div>
  )
}

export default App


{/* <div>
  <a href="https://vitejs.dev" target="_blank">
    <img src={cake} className="logo" alt="Vite logo" />
  </a>
</div>

<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */}