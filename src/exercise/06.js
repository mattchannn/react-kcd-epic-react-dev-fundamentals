// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const userNameRef = React.useRef('')
  const [error, setError] = React.useState('')
  const [isDisable, setIsDisable] = React.useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    onSubmitUsername(userNameRef.current.value)
  }

  function handleChange(e) {
    const containsUpperCase = /[A-Z]/.test(e.target.value)
    if (containsUpperCase) {
      setIsDisable(true)
      setError('Username must be in lower case')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          ref={userNameRef}
          onChange={handleChange}
        />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button type="submit" disabled={isDisable}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = name => {
    alert(`You entered: ${name}`)
  }
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
