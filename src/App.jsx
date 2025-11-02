import './index.css'
import { Outlet } from 'react-router-dom'
import Nav from './componentes/Nav.jsx'
import Footer from './componentes/Footer.jsx'

function App() {
  return (
    <>
    <Nav />
      <Outlet />
    <Footer />
    </>
  )
}

export default App
