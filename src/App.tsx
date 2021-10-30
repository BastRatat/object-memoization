import { useState, useRef } from 'react'
import Child from './Child'
import { InitialState, Users } from './types'
import { userOne, userTwo } from './users'
import './App.css'

const initialState: InitialState = {
  id: null,
  firstName: '',
  lastName: '',
}

const App = () => {
  const [user, setToggleUser] = useState(initialState)
  const [areButtonsColored, setAreButtonsColored] = useState<boolean>(false)
  const initialRef = useRef(0)
  const parentCounter = ++initialRef.current

  const handleToggleUser = (user: Users): void => {
    if (user === Users.BASTIEN) {
      setToggleUser(userOne)
    }
    if (user === Users.ANTOINE) {
      setToggleUser(userTwo)
    }
  }

  const resetUser = (): void => {
    setToggleUser(initialState)
  }

  const handleColoringButton = (): void => {
    setAreButtonsColored(!areButtonsColored)
  }

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h3>PARENT</h3>
          <p>Parent render(s): {parentCounter}</p>
          <button
            onClick={() => handleToggleUser(Users.BASTIEN)}
            className={areButtonsColored ? 'colored' : ''}
          >
            Toggle Bastien
          </button>
          <button
            onClick={() => handleToggleUser(Users.ANTOINE)}
            className={areButtonsColored ? 'colored' : ''}
          >
            Toggle Antoine
          </button>
          <button
            onClick={handleColoringButton}
            className={areButtonsColored ? 'colored' : ''}
          >
            Color buttons
          </button>
          <button
            onClick={resetUser}
            className={areButtonsColored ? 'colored' : ''}
          >
            Reset user
          </button>
        </section>
        <Child {...{ user }} />
      </header>
    </div>
  )
}

export default App
