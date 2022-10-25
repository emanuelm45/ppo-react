import styled from "styled-components"

const Loading = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  border: 8px solid var(--clr-blue-300);
  border-top-color: var(--clr-purple-300);
  border-radius: 50%;
  animation: load 1s infinite ease-in-out;

  @keyframes load {
    100% {
      transform: rotate(360deg);
    }
  }
`

export { Loading }
