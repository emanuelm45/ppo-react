import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Login, Register, Home, Classes } from '../pages'
import { Profile } from '../pages/Profile'
import { AnimatePresence } from 'framer-motion'
import { Loading } from '../components/Loading/style'
import { ProtectedRoute } from '../components/ProtectedRoute'
import { UseAuth } from '../contexts/Auth/UseAuth'

const AppRoutes = () => {
  const location = useLocation()
  const auth = UseAuth()
  if (auth.loading) return <Loading />

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/login/*" element={<Login />} />
          <Route path="/register/*" element={<Register />}></Route>
          <Route
            path="/home/*"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/classes/*"
            element={
              <ProtectedRoute>
                <Classes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/" element={<Navigate to="login" />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export { AppRoutes }
