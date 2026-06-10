import './banner.scss'
import bannerImage from '../../assets/Photo-Mer.png'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-content'>
            <img src={bannerImage} alt='Photo de nature' className='banner-image'/>
            </div>
        </div>
    )
}

export default Banner