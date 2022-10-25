import { useContext } from 'react'
import { AuthContext } from '.'

const UseAuth = () => {
  const context = useContext(AuthContext)

  return context
}

export { UseAuth }
