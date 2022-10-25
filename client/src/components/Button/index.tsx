import { ButtonHTMLAttributes } from 'react'
import { ButtonStyled } from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  padding?: string
  borderRadius?: string
  color?: string
  background?: string
  fontSize?: string
  colorHover?: string
  backgroundHover?: string
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonStyled
      padding={props.padding}
      borderRadius={props.borderRadius}
      color={props.color}
      background={props.background}
      fontSize={props.fontSize}
      colorHover={props.colorHover}
      backgroundHover={props.backgroundHover}
      {...props}
    >
      {props.children}
    </ButtonStyled>
  )
}

export { Button }
export type { ButtonProps }
