import './Stars.scss'
import active from '../../assets/star-active.png'
import inactive from '../../assets/star-inactive.png'

const Star = ({ active: isActive }) => {
  return (
    <img
      className='star'
      src={isActive ? active : inactive}
      alt={isActive ? 'Étoile active' : 'Étoile inactive'}
    />
  )
}

export default Star