import { FormEvent, useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { InputAnimated } from '../../components/InputAnimated'
import { Button } from '../../components/Button'
import { FormContainer } from './style'
import { UseAuth } from '../../contexts/Auth/UseAuth'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import AnimatedRoute from '../../components/AnimatedRoute'
import { Form, Formik } from 'formik'
import { LoginContainer } from './style'

const Login = () => {
  const auth = UseAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  // if (auth.token) return <Navigate to="/home" />

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    try {
      const { email, password } = ev.currentTarget
      await auth.authenticate(email.value, password.value)
      navigate('/home')
    } catch (error: any) {
      return setError('Email ou senha incorreta')
    }
  }

  return (
    <>
      <AnimatedRoute>
        <LoginContainer>
          <FormContainer>
            <h1>Login</h1>
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
            >
              {() => (
                <Form onSubmit={handleSubmit}>
                  <fieldset>
                    <legend style={{ opacity: 0, height: 0 }}>Login</legend>
                    <InputAnimated
                      name="email"
                      type="text"
                      label="Email"
                      autoComplete="off"
                      autoFocus
                      required
                    />
                    <InputAnimated
                      name="password"
                      type="password"
                      label="Password"
                      required
                    />
                  </fieldset>
                  {error && <p>{error}</p>}
                  <Button
                    padding=".6rem 3rem"
                    fontSize="1.6rem"
                    background="var(--clr-green-400)"
                    backgroundHover="var(--clr-green-300)"
                    style={{ width: '100%' }}
                  >
                    Login
                  </Button>
                  <span style={{ textAlign: 'center', marginTop: '1rem' }}>
                    Ainda não possui uma conta?
                    <NavLink to="/register"> Cadastre-se</NavLink>
                  </span>
                </Form>
              )}
            </Formik>
          </FormContainer>
        </LoginContainer>
      </AnimatedRoute>
    </>
  )
}

export { Login }
