import { useState } from 'react'

const messages = [
  'Learn React ⚛',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
]

function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  )
}

function Steps() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
  // const [user, setUser] = useState({ name: 'Chu' })

  const handlePrevious = () => {
    if (step > 1) setStep(step => step - 1)
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(step => step + 1)
      // setStep(step => step + 1)
    }
    // setUser({ name: 'Corine' })
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(isOpen => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              <span>👉</span> Next
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      Step {step}: {children}
    </p>
  )
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default App
