import Api from '../../services/Api'
import { validateFields } from '../../utils/validators'
import { IContext, IUser } from './types'

const setUserLocalStorage = (user: IUser | null) => {
  localStorage.setItem('t', JSON.stringify(user))
}

const getUserLocalStorage = () => {
  const json = localStorage.getItem('t')

  if (json) {
    const user = JSON.parse(json)
    return user ?? null
  }

  return null
}

const RegisterRequest = async (
  name: string,
  email: string,
  password: string,
  classId: number
) => {
  // if (!validateFields(email, password)) throw new Error('dados incorretos')

  const req = await Api.post('/user/register', {
    name,
    email,
    password,
    class_id: classId
  })
  return req.data
}

const LoginRequest = async (email: string, password: string) => {
  try {
    const req = await Api.post('user/login', { email, password })
    return req.data
  } catch (error) {
    return null
  }
}

const UpdateRequest = async (id: number, name: string, email: string) => {
  try {
    const req = await Api.patch('user/update', { id, name, email })
    return req.data
  } catch (error) {
    return error
  }
}

const getUserData = async (token: IUser) => {
  try {
    const req = await Api.get(`http://localhost:8080/user/login/${token}`)
    const classn = await Api.get(
      `http://localhost:8080/class/${req.data.class_id}`
    )

    return { ...req.data, class: classn.data.classname }
  } catch (error) {
    return error
  }
}

const getClassData = async (classId: number) => {
  try {
    const req = await Api.get(`http://localhost:8080/class/${classId}`)

    return { ...req.data }
  } catch (error) {
    return error
  }
}

export {
  RegisterRequest,
  LoginRequest,
  UpdateRequest,
  setUserLocalStorage,
  getUserLocalStorage,
  getUserData,
  getClassData
}
