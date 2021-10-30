import { useState, useRef, useMemo } from 'react'
import Child from './Child'
import Button from './Button'
import { InitialState, Users } from './types'
import { userOne, userTwo } from './users'
import { generateButtons } from './helpers'
import './App.css'

const initialState: InitialState = {
  id: null,
  firstName: '',
  lastName: '',
}

const App = () => {
  const [user, setToggleUser] = useState(initialState)
  const [areButtonsColored, setAreButtonsColored] = useState(false)
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

  const buttonsData = useMemo(
    () =>
      generateButtons(areButtonsColored, {
        handleToggleUser,
        handleColoringButton,
        resetUser,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [areButtonsColored],
  )

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h3>PARENT</h3>
          <p>Parent render(s): {parentCounter}</p>
          {buttonsData.map(({ label, colored, onClick }) => (
            <Button {...{ label, colored, onClick }} />
          ))}
        </section>
        <Child {...{ user }} />
      </header>
    </div>
  )
}

export default App
