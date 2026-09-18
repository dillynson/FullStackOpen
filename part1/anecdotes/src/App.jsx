import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function getTopAnecdote(arr) {
  // arr represents the array that holds the # of votes per anecdote
  let highestVotes = 0;
  let highestIndex = 0;
  // go through each value in arr
  for (let i = 0; i < arr.length; i++) {
    // check if the current value is higher than the previous highest value
    if (arr[i] > highestVotes)
    {
      // if it is, save both the value and the index
      highestVotes = arr[i]
      highestIndex = i
    }
  }
  // return the index of the highest value
  return highestIndex
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const n = anecdotes.length;
  const [votes, setVotes] = useState(new Array(n).fill(0))


  const handleSelected = () => {
    setSelected(getRandomInt(8))
  }

  const handleVote = () => {
      const copy = [...votes]
      copy[selected] += 1
      setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleSelected}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      {anecdotes[getTopAnecdote(votes)]}
      
    </div>
  )

}

export default App