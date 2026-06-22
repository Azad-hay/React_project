import './Header.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/LOGO-ROUGE.png'

const Header = () =>{

    return (

        <header className='header' id='header'>
            <div className='header-content'>
                <img src={logo} alt='Logo Kasa' className='kasa-logo-rouge '/> 
                <nav className='nav-bar'>
                    <NavLink to="/" className='nav-link'>Accueil</NavLink>
                    <NavLink to="/about" className='nav-link'>A Propos</NavLink>
                </nav>
            </div>
        </header>

    )
}

export default Header