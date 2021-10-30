import { useRef, memo } from 'react'
import { ChildProps } from './types'
import { arePropsEqual } from './helpers'

const Child = ({ user }: ChildProps) => {
  const initialRef = useRef(0)
  const childCounter = ++initialRef.current
  return (
    <section>
      <h3>CHILD</h3>
      {Object.entries(user).map(([key, value]) => (
        <p {...{ key }}>{value}</p>
      ))}
      <hr />
      <p>Child render(s): {childCounter}</p>
    </section>
  )
}

export default memo(Child, arePropsEqual)
