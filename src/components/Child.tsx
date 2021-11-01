import { useRef } from 'react'
import { ChildProps } from '../types/types'

const Child = ({ user }: ChildProps) => {
  const initialRef = useRef(0)
  const childCounter = ++initialRef.current
  return (
    <div className="child-section">
      <h4>CHILD</h4>
      {Object.entries(user).map(([key, value]) => (
        <p {...{ key }}>{value}</p>
      ))}
      <p className="counter">RENDERS: {childCounter}</p>
    </div>
  )
}

export default Child
