import { ChildProps, ButtonLabels, Users } from './types'

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

const generateButtons = (areButtonsColored: boolean, handlers: any) => {
  const { handleToggleUser, handleColoringButton, resetUser } = handlers
  return [
    {
      label: ButtonLabels.TOGGLE_BASTIEN,
      colored: areButtonsColored,
      onClick: () => handleToggleUser(Users.BASTIEN),
    },
    {
      label: ButtonLabels.TOGGLE_ANTOINE,
      colored: areButtonsColored,
      onClick: () => handleToggleUser(Users.ANTOINE),
    },
    {
      label: ButtonLabels.COLOR_BUTTON,
      colored: areButtonsColored,
      onClick: handleColoringButton,
    },
    {
      label: ButtonLabels.RESET_USER,
      colored: areButtonsColored,
      onClick: resetUser,
    },
  ]
}

export { arePropsEqual, generateButtons }
