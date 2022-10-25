import styled from 'styled-components'
import { devices } from '../../styles/devices'

const FormContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: calc(var(--fs-800) * 1.6);
    font-family: var(--ff-secondary);
  }

  button {
    margin-top: 1rem;
  }

  @media ${devices.mobileL} {
    h1 {
      font-size: var(--fs-800);
    }
  }

  form {
    position: relative;
    width: min(25rem, 90vw);
    background-color: var(--clr-gray);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 3rem 2rem;
    border-radius: 41px;
    -webkit-box-shadow: 13px 13px 40px #999999, -13px -13px 40px #ffffff;
    box-shadow: 13px 13px 40px #999999, -13px -13px 40px #ffffff;

    input,
    select {
      width: 100%;
    }

    a {
      margin-top: 1rem;
      text-align: center;
    }
  }
`

// const Form = styled.form`
//   position: relative;
//   width: min(25rem, 85vw);
//   background-color: var(--clr-gray);
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   padding: 3rem 2rem;
//   border-radius: 41px;
//   -webkit-box-shadow: 13px 13px 40px #999999, -13px -13px 40px #ffffff;
//   box-shadow: 13px 13px 40px #999999, -13px -13px 40px #ffffff;

//   input,
//   select {
//     width: 100%;
//   }

//   a {
//     margin-top: 1rem;
//     text-align: center;
//   }
// `

export { FormContainer }
