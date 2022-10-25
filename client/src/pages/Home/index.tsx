import { Navbar } from '../../components'
import { motion } from 'framer-motion'
import { UseAuth } from '../../contexts/Auth/UseAuth'
import AnimatedRoute from '../../components/AnimatedRoute'

const Home = () => {
  const auth = UseAuth()
  return (
    <>
      <Navbar />
      <AnimatedRoute>
        <h1 style={{ fontWeight: 'bold', fontSize: '3rem', marginTop: '5rem' }}>
          {`
            Bem-vind${auth.user.name.slice(-1) === 'a' ? 'a' : 'o'},
            ${auth.user.name}`}
        </h1>
      </AnimatedRoute>
    </>
  )
}

export { Home }
