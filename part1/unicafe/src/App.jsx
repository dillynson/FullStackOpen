import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>total {props.total}</p>
      <p>average {(props.good - props.bad)/props.total}</p>
      <p>positive {(props.good/props.total) * 100}%</p>
    </div>
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    console.log('good', good)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    console.log('neutral', neutral)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    console.log('bad', bad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>


      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App