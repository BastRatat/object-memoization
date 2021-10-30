import { useState, useRef, useMemo } from 'react'
import MemoizedChild from './components/MemoizedChild'
import Child from './components/Child'
import Button from './components/Button'
import { InitialState, Users } from './types/types'
import { USER_ONE, USER_TWO } from './constants/users'
import { generateButtons } from './helpers/helpers'
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

  const toggleUser = (user: Users): void => {
    if (user === Users.BASTIEN) {
      setToggleUser(USER_ONE)
    }
    if (user === Users.ANTOINE) {
      setToggleUser(USER_TWO)
    }
  }

  const resetUser = (): void => {
    setToggleUser(initialState)
  }

  const colorButtons = (): void => {
    setAreButtonsColored(!areButtonsColored)
  }

  const reloadPage = () => {
    window.location.reload()
  }

  const buttonsData = useMemo(
    () =>
      generateButtons(areButtonsColored, {
        toggleUser,
        colorButtons,
        resetUser,
        reloadPage,
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
          {buttonsData.map(props => (
            <Button {...props} />
          ))}
        {/* <button onClick={reloadPage}>Reload</button> */}
        </section>
        <div className="children-wrapper">
        <MemoizedChild {...{ user }} />
        <Child {...{ user }} />
        </div>
      </header>
    </div>
  )
}

export default App
