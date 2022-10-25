import styled from 'styled-components'
import { ButtonProps } from '.'

const ButtonStyled = styled.button.attrs((props: ButtonProps) => ({
  padding: props.padding || '1rem',
  borderRadius: props.borderRadius || '.8rem',
  color: props.color || 'var(--clr-white)',
  background: props.background || 'var(--clr-gray-400)',
  fontSize: props.fontSize || '1rem',
  colorHover: props.colorHover,
  backgroundHover: props.backgroundHover
}))`
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius};
  font-weight: 700;
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  background-color: ${props => props.background};
  transition: var(--td-fast);

  &:hover {
    color: ${props => props.colorHover};
    background-color: ${props => props.backgroundHover};
  }

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`

export { ButtonStyled }
