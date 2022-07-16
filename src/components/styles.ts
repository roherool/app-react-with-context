import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: '#3b82f6',
  secondary: '#f97316',
  success: '#14b8a6',
  danger: '#ef4444',
}

export const Container = styled.button<ButtonContainerProps>`
  //background: ${(props) => props.theme['green-500']};
  border: 0;
  border-radius: 4px;
  color: ${(props) => props.theme.white};
  height: 40px;
  margin: 8px;
  width: 100px;

  ${(props) => {
    return css`
      background: ${buttonVariants[props.variant]};
    `
  }}
`
