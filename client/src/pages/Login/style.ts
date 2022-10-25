import styled from 'styled-components'

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.div`
  position: relative;
  width: min(25rem, 90vw);
  background-color: var(--clr-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 2rem;
  border-radius: 41px;
  -webkit-box-shadow: 13px 13px 40px #999999, -13px -13px 40px #ffffff;
  box-shadow: 13px 13px 40px #999999, -13px -13px 40px #ffffff;

  h1 {
    margin-bottom: 0.6rem;
    text-transform: uppercase;
    font-size: calc(var(--fs-800) * 1.6);
    font-family: var(--ff-secondary);
  }

  input,
  select {
    width: 100%;
  }

  span {
    display: block;
    margin-top: 1rem;
    text-align: center;
  }
`

export { LoginContainer, FormContainer }
