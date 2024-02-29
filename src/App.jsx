import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './component/NavBar'
import Homepage from './pages/Homepage'
import About from './pages/About'

import Stack from './pages/Stack'
import Contact from './pages/Contact'
import Bookshelf from './pages/Bookshelf'

const App = () => {
  return (
    <Router>

    <div className=' py-4 flex items-center justify-center'>
      <div className='main w-[95vw] bg-tertiary rounded-3xl'>
        <NavBar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/stack' element={<Stack />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/bookshelf' element={<Bookshelf />} />
          </Routes>
          
      </div>
    </div>

      
    </Router>
    
  )
}

export default App

