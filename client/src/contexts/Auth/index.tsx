import { createContext, useEffect, useState } from 'react'
import { IAuthProvider, IContext, IUser } from './types'
import {
  getClassData,
  getUserData,
  getUserLocalStorage,
  LoginRequest,
  RegisterRequest,
  setUserLocalStorage,
  UpdateRequest
} from './util'

const AuthContext = createContext<IContext>({} as IContext)

const AuthProvider = ({ children }: IAuthProvider) => {
  const [token, setToken] = useState<IUser | null>()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({} as IContext)
  const [classes, setClasses] = useState({} as IContext)

  useEffect(() => {
    const userLocalStorage = getUserLocalStorage()

    if (userLocalStorage) {
      setToken(userLocalStorage)
      setLoading(false)
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    const userLocalStorage = getUserLocalStorage()

    if (userLocalStorage) {
      getUserData(userLocalStorage.token).then(data => {
        setUser(data)
        getClassData(data.class_id).then(res => {
          setClasses(res)
        })
      })
    }
  }, [token])

  const register = async (
    name: string,
    email: string,
    password: string,
    classId: number
  ) => {
    const res = await RegisterRequest(name, email, password, classId)
    return res.data
  }

  const authenticate = async (email: string, password: string) => {
    const res = await LoginRequest(email, password)

    const payload = { token: res.token }

    setToken(payload)
    setUserLocalStorage(payload)
  }

  const update = async (id: number, name: string, email: string) => {
    const res = await UpdateRequest(id, name, email)
  }

  const logout = () => {
    setToken(null)
    setUserLocalStorage(null)
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          ...token,
          user,
          classes,
          register,
          authenticate,
          update,
          logout,
          loading,
          setLoading
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  )
}

export { AuthContext, AuthProvider }
