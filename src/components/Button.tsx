import { ButtonHTMLAttributes } from 'react'

import * as s from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: s.ButtonVariant
}

export function Button({ variant = 'primary', ...rest }: ButtonProps) {
  return (
    <>
      <s.Container variant={variant} {...rest}>
        Click Me
      </s.Container>
    </>
  )
}
