import './Name.scss'

const Name = ({ name, picture }) => {
    return (
        <div className='name-container'>
            <h1 className='name-host'>{name}</h1>
            <img src={picture} alt={`photo de ${name}`} className='host-img' />
        </div>
    )}

export default Name