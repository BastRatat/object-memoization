export enum Users {
  BASTIEN = 'Bastien',
  ANTOINE = 'Antoine',
}

export enum ButtonLabels {
  TOGGLE_BASTIEN = 'Toggle Bastien',
  TOGGLE_ANTOINE = 'Toggle Antoine',
  COLOR_BUTTON = 'Color buttons',
  RESET_USER = 'Reset user',
}

export interface InitialState {
  id: number | null
  firstName: string
  lastName: string
}

export interface ChildProps {
  user: InitialState
}

export interface ButtonProps {
  label: string
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  colored: boolean
}
