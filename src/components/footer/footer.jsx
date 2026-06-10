import './footer.scss'
import logo from '../../assets/LOGO-BLANC.png'  

const Footer = () => {
    return (

        <footer className='footer' id='footer'>
            <img src={logo} alt='Logo Kasa' className='kasa-logo-blanc' />
            <p>&copy; 2020 Kasa. All 
                rights reserved.</p>
        </footer>

    )
}

export default Footer