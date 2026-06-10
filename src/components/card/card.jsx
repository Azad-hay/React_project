import './card.scss'

const Card = ({ title, imageUrl }) => {
    return (
        <div className='card'>
            {imageUrl && <img src={imageUrl} alt={title} />}
            {title && <h3>{title}</h3>}
        </div>
    )
}

export default Card