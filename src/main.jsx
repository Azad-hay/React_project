import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './Core/Home/Home.jsx'
import About from './Core/About/About.jsx'
import Logements from './Core/Logements/Logements.jsx'
import Error from './Core/Error/Error.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/logement/:id' element={<Logements />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
)