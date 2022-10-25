import styled from 'styled-components'

const InputContainer = styled.div`
  position: relative;
  padding: 1rem 0;

  label {
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--fs-500);
    pointer-events: none;
    transition-property: top, left, font-size;
    transition-duration: var(--td-fast);
  }
  input {
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
  }
`

// const InputLabelStyled = styled.label`
//   position: absolute;
//   left: 0.5rem;
//   top: 50%;
//   transform: translateY(-50%);
//   font-size: var(--fs-500);
//   pointer-events: none;
//   transition-property: top, left, font-size;
//   transition-duration: var(--td-fast);
// `

// const InputStyled = styled.input`
//   border: 2px solid var(--clr-black);
//   border-radius: 0.6rem;
//   padding: 0.4rem;
//   font-size: var(--fs-500);

//   &:focus ~ ${InputLabelStyled}, &:valid ~ ${InputLabelStyled} {
//     top: 0;
//     left: 0.2rem;
//     font-size: var(--fs-300);
//   }
// `

export { InputContainer }
