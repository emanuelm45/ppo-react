import styled from 'styled-components'

const SelectStyled = styled.select`
  border: 2px solid var(--clr-black);
  border-radius: 0.6rem;
  padding: 0.4rem;
  font-size: var(--fs-500);

  &:focus ~ label,
  &:valid ~ label {
    top: 0.4rem;
    left: 0.2rem;
    font-size: var(--fs-300);
  }
`

export { SelectStyled }
