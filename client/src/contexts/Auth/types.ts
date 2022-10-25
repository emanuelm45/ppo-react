import { Dispatch } from 'react'

interface IUser {
  token?: string
}

interface IContext extends IUser {
  user: Object
  classes: Object
  register: (
    name: string,
    email: string,
    password: string,
    classId: number
  ) => Promise<void>
  authenticate: (email: string, password: string) => Promise<void>
  update: (id: number, name: string, email: string) => Promise<void>
  logout: () => void
  loading: boolean
  setLoading: Dispatch<React.SetStateAction<boolean>>
}

interface IAuthProvider {
  children: JSX.Element
}

export type { IUser, IContext, IAuthProvider }
