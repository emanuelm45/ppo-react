import styled from 'styled-components'
import { devices } from '../../styles/devices'

const ProfileContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-blue-sky);
  width: min(20rem, 90vw);
  border-radius: 2rem;
`

const ProfileInformation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-radius: 2rem;
  padding: 2rem;

  @media ${devices.tablet} {
    padding: 1rem;
  }

  .icon-edit {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & * {
      cursor: pointer;
    }

    button {
      width: 80%;
      opacity: 1;
      transition: opacity 0.3s;
    }

    svg {
      margin-left: auto;
    }
  }
`

const InformationRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--clr-blue-500);
  color: white;
  border-radius: 1rem;
  font-size: var(--fs-800);
  padding: 1rem;
  gap: 1rem;

  input {
    background-color: transparent;
    color: var(--clr-white);
    width: 80%;
    text-align: center;

    &:disabled {
      opacity: 0.6;
      user-select: none;
    }
  }
`

export { ProfileContainer, FormContainer, ProfileInformation, InformationRow }
