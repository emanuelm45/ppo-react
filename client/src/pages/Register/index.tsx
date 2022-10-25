import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UseAuth } from '../../contexts/Auth/UseAuth'
import { FaArrowLeft } from 'react-icons/fa'
import AnimatedRoute from '../../components/AnimatedRoute'
import { Form, Formik } from 'formik'
import { InputAnimated } from '../../components/InputAnimated'
import { Button } from '../../components/Button'
import { SelectAnimated } from '../../components/SelectAnimated'
import { FormContainer } from '../Login/style'
import { RegisterContainer } from './style'

const Register = () => {
  const navigate = useNavigate()
  const auth = UseAuth()

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    try {
      const { name, email, password, classId } = ev.currentTarget
      await auth.register(
        name.value,
        email.value,
        password.value,
        classId.value
      )
      setTimeout(() => {
        navigate('/login')
      }, 1000)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <>
      <AnimatedRoute>
        <RegisterContainer>
          <FormContainer>
            <Link to="/login" className="icon">
              <FaArrowLeft size={40} />
            </Link>
            <h1>Register</h1>
            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
                classname: ''
              }}
            >
              {() => (
                <Form onSubmit={handleSubmit}>
                  <fieldset>
                    <legend style={{ opacity: 0, height: 0 }}>Register</legend>
                    <InputAnimated
                      type="text"
                      name="name"
                      label="Name"
                      autoFocus
                      required
                    />
                    <InputAnimated
                      type="email"
                      name="email"
                      label="Email"
                      required
                    />
                    <InputAnimated
                      type="password"
                      name="password"
                      label="Password"
                      required
                    />
                    <SelectAnimated label="Class" name="classId" />
                  </fieldset>
                  <Button
                    background="var(--clr-purple-300)"
                    backgroundHover="var(--clr-blue-500)"
                    fontSize="1.6rem"
                    padding=".6rem"
                    style={{ width: '100%' }}
                  >
                    Register
                  </Button>
                </Form>
              )}
            </Formik>
          </FormContainer>
        </RegisterContainer>
      </AnimatedRoute>
    </>
  )
}

export { Register }
