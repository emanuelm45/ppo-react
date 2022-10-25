import { SelectHTMLAttributes, useEffect, useState } from 'react'
import { InputContainer } from '../InputAnimated/style'
import { SelectStyled } from './style'

interface SelectAnimatedProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
}

const SelectAnimated = (props: SelectAnimatedProps) => {
  const [classes, setClasses] = useState([] as any)

  useEffect(() => {
    const getClasses = async () => {
      const res = await fetch('http://localhost:8080/class/*')
      await res.json().then(data => setClasses(data))
    }
    getClasses()
  }, [])
  return (
    <>
      <InputContainer>
        <SelectStyled {...props}>
          {classes.map((item: any) => {
            return (
              <option key={item.id} value={item.id} defaultValue={1}>
                {item.class}
              </option>
            )
          })}
        </SelectStyled>
        <label>{props.label}</label>
      </InputContainer>
    </>
  )
}

export { SelectAnimated }
