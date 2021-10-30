import { ChildProps } from './types'

const arePropsEqual = (
  prevProps: ChildProps,
  nextProps: ChildProps,
): boolean => {
  const {
    user: { id: prevPropsId },
  } = prevProps
  const {
    user: { id: nextPropsId },
  } = nextProps

  if (prevPropsId === nextPropsId) {
    // memoize
    return true
  }
  // Do not memoize
  return false
}

export { arePropsEqual }
