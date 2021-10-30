import { ButtonProps } from './types'

const Button = ({ label, onClick, colored }: ButtonProps) => {
  return (
    <button onClick={onClick} className={colored ? 'colored' : ''}>
      {label}
    </button>
  )
}

export default Button
