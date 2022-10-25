import { Navbar } from '../../components'
import { UseAuth } from '../../contexts/Auth/UseAuth'
import AnimatedRoute from '../../components/AnimatedRoute'

const Classes = () => {
  const auth = UseAuth()

  return (
    <>
      <Navbar />
      <AnimatedRoute>
        <h1 style={{ fontSize: 'var(--fs-700)', fontWeight: 'bold' }}>
          Classmates - {auth.user.class}
        </h1>
        <p>{auth.classes.students}</p>
      </AnimatedRoute>
    </>
  )
}

export { Classes }
