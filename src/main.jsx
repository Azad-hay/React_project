import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Banner from './components/banner/banner.jsx'
import CardWallet from './components/card-wallet/card-wallet.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header />
      <Banner />
      <CardWallet />
      <Footer />
  
  </StrictMode>
)