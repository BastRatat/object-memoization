import { useRef, memo } from 'react'
import { ChildProps } from '../types/types'
import { arePropsEqual } from '../helpers/helpers'

const MemoizedChild = ({ user }: ChildProps) => {
  const initialRef = useRef(0)
  const childCounter = ++initialRef.current
  return (
    <div className="child-section">
      <h4>MEMOIZED CHILD</h4>
      {Object.entries(user).map(([key, value]) => (
        <p {...{ key }}>{value}</p>
      ))}
      <hr />
      <p>Memoized child render(s): {childCounter}</p>
    </div>
  )
}

export default memo(MemoizedChild, arePropsEqual)
