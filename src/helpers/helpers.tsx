import {
  ChildProps,
  ButtonLabels,
  Users,
  Handlers,
  Buttons,
} from '../types/types'

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
    return true
  }
  return false
}

const generateButtons = (
  areButtonsColored: boolean,
  handlers: Handlers,
): Buttons => {
  const { toggleUser, colorButtons, resetUser, reloadPage } = handlers
  return [
    {
      label: ButtonLabels.TOGGLE_BASTIEN,
      colored: areButtonsColored,
      onClick: () => toggleUser(Users.BASTIEN),
    },
    {
      label: ButtonLabels.TOGGLE_ANTOINE,
      colored: areButtonsColored,
      onClick: () => toggleUser(Users.ANTOINE),
    },
    {
      label: ButtonLabels.COLOR_BUTTON,
      colored: areButtonsColored,
      onClick: colorButtons,
    },
    {
      label: ButtonLabels.RESET_USER,
      colored: areButtonsColored,
      onClick: resetUser,
    },
    {
      label: ButtonLabels.RELOAD_PAGE,
      colored: areButtonsColored,
      onClick: reloadPage,
    },
  ]
}

export { arePropsEqual, generateButtons }
