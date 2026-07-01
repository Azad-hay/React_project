import './Banner.scss'
import bannerMer from '../../assets/Photo-Mer.png'
import bannerMontagne from '../../assets/Photo-Montagne.png'


const Banner = (props) => {
    const image = props.image === 'mer' ? bannerMer : bannerMontagne
    const alt = props.image === 'mer' ? 'Photo de la mer' : 'Photo de la montagne'
    const titre = props.title === true ? 'Chez vous, partout et ailleurs' : null

    return (
        <div className='banner'>
            <div className='banner-content'>
                <img src={image} alt={alt} className='banner-image' />
                <div className='banner-overlay' />
                {props.title === true && <h1 className='banner-text'>{titre}</h1>}
            </div>
        </div>
    )
}



export default Banner