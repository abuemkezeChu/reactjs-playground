import { React } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function App() {
  return (
    <div className="card">
      <Avatar />
    </div>
  )
}

function Avatar() {
  return <img className="avatar" src="profile.png" alt="profile"></img>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
