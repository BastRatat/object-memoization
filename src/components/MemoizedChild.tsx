import { useRef, memo } from 'react'
import { InitialState } from '../types/types'
import { arePropsEqual } from '../helpers/helpers'
import {
  withPerformanceMetrics,
  withPerformanceMetricsProps,
} from '../helpers/HOC/withPerformanceMetrics'

interface ChildProps extends withPerformanceMetricsProps {
  user: InitialState
}

const MemoizedChild = ({ user }: ChildProps) => {
  const initialRef = useRef(0)
  const childCounter = ++initialRef.current
  return (
    <div className="child-section-memo">
      <h4>MEMOIZED CHILD</h4>
      {Object.entries(user).map(([key, value]) => (
        <p {...{ key }}>{value}</p>
      ))}
      <p className="counter">RENDERS: {childCounter}</p>
    </div>
  )
}

export default memo(
  withPerformanceMetrics(MemoizedChild, 'MemoizedChild'),
  arePropsEqual,
)
