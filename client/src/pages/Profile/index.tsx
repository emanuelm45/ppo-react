import {
  FormContainer,
  InformationRow,
  ProfileContainer,
  ProfileInformation
} from './style'
import { Navbar } from '../../components'
import { Button } from '../../components/Button'
import { UseAuth } from '../../contexts/Auth/UseAuth'
import {
  FaUserCircle,
  FaUser,
  FaMailBulk,
  FaUserFriends,
  FaEdit
} from 'react-icons/fa'
import AnimatedRoute from '../../components/AnimatedRoute'
import { MouseEvent, useState } from 'react'
import { UpdateRequest } from '../../contexts/Auth/util'

const Profile = () => {
  const auth = UseAuth()
  const [btnSave, setBtnSave] = useState(false)

  const logout = () => auth.logout()

  const handleClick = (ev: MouseEvent) => {
    ev.currentTarget.parentElement?.parentElement
      ?.querySelectorAll('input')
      .forEach(input => (input.disabled = input.disabled ? false : true))
    setBtnSave(!btnSave)
  }

  const handleSubmit = async (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault()
    const form = ev.currentTarget.parentElement?.parentElement?.parentElement!
    const name = form.name.value
    const email = form.email.value

    try {
      await UpdateRequest(auth.user.id, name, email)
    } catch (error) {
      return error
    }
  }

  return (
    <>
      <Navbar />
      <AnimatedRoute>
        <ProfileContainer>
          <FormContainer>
            <form>
              <ProfileInformation>
                <FaUserCircle
                  color="var(--clr-black)"
                  size="100"
                  title="User Icon"
                />
                <InformationRow>
                  <FaUser title="User Icon" />
                  <input name="name" defaultValue={auth.user.name} disabled />
                </InformationRow>
                <InformationRow>
                  <FaMailBulk title="Mail Icon" />
                  <input name="email" defaultValue={auth.user.email} disabled />
                </InformationRow>
                <InformationRow>
                  <FaUserFriends title="Class Icon" />
                  <input defaultValue={auth.classes.classname} disabled />
                </InformationRow>
                <div className="icon-edit">
                  {btnSave ? (
                    <Button
                      background="var(--clr-green-400)"
                      backgroundHover="var(--clr-green-300)"
                      onClick={ev => {
                        handleClick(ev)
                        handleSubmit(ev)
                      }}
                    >
                      Save
                    </Button>
                  ) : (
                    <FaEdit
                      size={30}
                      color="var(--clr-white)"
                      title="Edit User"
                      onClick={handleClick}
                    />
                  )}
                </div>
              </ProfileInformation>
            </form>
          </FormContainer>
          <Button
            padding="1rem 3rem"
            background="var(--clr-red-400)"
            backgroundHover="var(--clr-red-600)"
            onClick={logout}
          >
            LOGOUT
          </Button>
        </ProfileContainer>
      </AnimatedRoute>
    </>
  )
}

export { Profile }
