import './Card.scss'
import logements from '../../data/logement.json'

const Card = ({ title, imageUrl, onClick, id }) => {
    return (
        <div className='card' onClick={() => onClick(id)}>
            {imageUrl && <img src={imageUrl} alt={title} />}
            {title && <h3>{title}</h3>}
        </div>
    )
}

export default Card