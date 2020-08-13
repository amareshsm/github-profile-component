import React from 'react'
import './App.css'
import { Profile } from 'github-profile-component'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile username="amareshsm" showRepo="true" />
      </header>
    </div>
  )
}

export default App
