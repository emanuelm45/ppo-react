import { Field } from 'formik'
import { InputHTMLAttributes } from 'react'
import { InputContainer } from './style'

interface InputAnimatedProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const InputAnimated = (props: InputAnimatedProps) => {
  return (
    <>
      <InputContainer>
        <Field {...props} />
        <label>{props.label}</label>
      </InputContainer>
    </>
  )
}

export { InputAnimated }
