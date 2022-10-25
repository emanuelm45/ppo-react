import { Navigate } from 'react-router-dom'
import { UseAuth } from '../../contexts/Auth/UseAuth'

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const auth = UseAuth()

  if (!auth.token) return <Navigate to="/login" />

  return children
}

export { ProtectedRoute }
