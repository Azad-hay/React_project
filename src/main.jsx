import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Logements from './Pages/Logements/Logements.jsx'
import Error from './Pages/Error/Error.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/logement/:id' element={<Logements />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </StrictMode>
)