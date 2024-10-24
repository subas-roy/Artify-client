import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='mx-auto'>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
