import './header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO-ROUGE.png'

const Header = () =>{

    return (

        
        <header className='header' id='header'>
            <div className='header-content'>
                    
                     <img src={logo} alt='Logo Kasa' className='kasa-logo-rouge '/> 
                    <nav className='nav-bar'>
                     <a href="#" className='nav-link'>Acceuil</a>
                     <a href="#" className='nav-link'>A Propos</a>
                    </nav>
        
            </div>

        </header>

    )
}

export default Header