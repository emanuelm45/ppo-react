import { AppRoutes } from './routes'
import { Navbar } from './components'
import GlobalStyle from './styles/global'

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
    </div>
  )
}

// Rive, AutoAnimate, React Icons
export { App }
