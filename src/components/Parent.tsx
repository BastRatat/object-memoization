import { useState, useRef, useMemo } from 'react'
import MemoizedChild from './MemoizedChild'
import Child from './Child'
import Button from './Button'
import { InitialState, Users } from '../types/types'
import { USER_ONE, USER_TWO } from '../constants/users'
import { generateButtons } from '../helpers/helpers'

const initialState: InitialState = {
  id: null,
  firstName: '',
  lastName: '',
}

const Parent = () => {
  const [user, setToggleUser] = useState(initialState)
  const [areButtonsColored, setAreButtonsColored] = useState(false)
  const parentCounter = useRef(0)

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
    <>
      <section>
        <h3>PARENT</h3>
        <p>Parent render(s): {(parentCounter.current += 1)}</p>
        {buttonsData.map(({ label, colored, onClick }) => (
          <Button key={label} {...{ label, colored, onClick }} />
        ))}
      </section>
      <div className="children-wrapper">
        <MemoizedChild {...{ user }} />
        <Child {...{ user }} />
      </div>
    </>
  )
}

Parent.whyDidYouRender = true

export default Parent
