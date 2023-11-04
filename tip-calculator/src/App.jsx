import { useState } from 'react'
import './index.css'

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  )
}

function TipCalculator() {
  const [bill, setBill] = useState('')
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)

  const tip = bill * (((percentage1 + percentage2) / 2) * 100)

  function handleReset() {
    setBill('')
    setPercentage1(0)
    setPercentage2(0)
  }
  return <div></div>
}
