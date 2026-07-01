import './Title.scss';

const Title = ({ title, location }) => {

    return (
        <div className='title-container'>
            <h1 className='title-logement'>{title}</h1>
            <p className='location-logement'>{location}</p>
        </div>
    )}


export default Title