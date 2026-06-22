import './Error.scss'
import { NavLink } from 'react-router-dom'


const Error = () => {
  return (
    <main className='error-page'>
      <div className='error-content'>
        <h1 className='error'>404</h1>
        <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to='/' className='error-link'>Retournez sur la page d'accueil</NavLink>
      </div>
    </main>
  )
}

export default Error