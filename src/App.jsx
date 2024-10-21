import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='mx-auto px-24'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
