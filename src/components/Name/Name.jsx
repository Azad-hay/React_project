import './Name.scss'

const Name = ({ name, picture }) => {
    return (
        <div className='name-container'>
            <p className='name-host'>{name}</p>
            <img src={picture} alt={`photo de ${name}`} className='host-img' />
        </div>
    )}

export default Name