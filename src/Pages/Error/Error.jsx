import './Error.scss'
import { NavLink, useLocation } from 'react-router-dom'

const Error = () => {
  const location = useLocation()
  const isLogementError = location.state?.fromLogement

  return (
    <main className='error-page'>
      <div className='error-content'>
        <h1 className='error'>404</h1>
        <p className='error-text'>
          {isLogementError
            ? "Oups ! Le bien que vous cherchez n'existe pas."
            : "Oups ! La page que vous demandez n'existe pas."}
        </p>
        <NavLink to='/' className='error-link'>Retournez sur la page d'accueil</NavLink>
      </div>
    </main>
  )
}

export default Error