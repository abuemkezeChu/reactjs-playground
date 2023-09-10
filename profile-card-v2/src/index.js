import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const skillData = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
]

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
      <p></p>
    </div>
  )
}

function SkillList() {
  const skills = skillData

  return (
    <ul className="skill-list">
      {skills.map(skill => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </ul>
  )
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {(level === 'beginner' && '👶') ||
          (level === 'intermediate' && '👍') ||
          (level === 'advanced' && '💪')}
      </span>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
