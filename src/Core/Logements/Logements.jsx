import { useParams, Navigate } from 'react-router-dom'
import logements from '../../data/logement.json'
import Stars from '../../components/Stars/Stars.jsx'

import './Logements.scss'

const Logements = () => {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to='/404' />
  }

  return (
    <main className='logement'>
      
        <Stars stars={Number(logement.rating)} />
     
    </main>
  )
}

export default Logements