import { React } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <AboutMe />
      </div>
    </div>
  )
}

function Avatar() {
  return <img className="avatar" src="profile.png" alt="profile"></img>
}

function AboutMe() {
  return (
    <div>
      <h2>Jonas Schmedtmann</h2>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
