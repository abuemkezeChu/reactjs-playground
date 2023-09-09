import { React } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <AboutMe />
        <SkillList />
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

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" color="red" />
      <Skill skill="JavaScript" color="orange" />
      <Skill skill="Git and Github" color="darkblue" />
      <Skill skill="React" color="blue" />
    </div>
  )
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
