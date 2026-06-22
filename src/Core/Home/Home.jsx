
import Card from '../../components/Card/Card.jsx'
import logements from '../../data/logement.json'
import Banner from '../../components/Banner/Banner.jsx'
import { useNavigate } from 'react-router-dom'
import './Home.scss'

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <Banner image='mer' title={true} />
            </div>
            <div className='wallet'>
                <div className='card-container'>
                    {logements.map(({ id, title, cover }) => (
                        <Card key={id} id={id} title={title} imageUrl={cover}
                        onClick={(logementId) => {navigate(`/logement/${logementId}`)}} />
                    ))}
                </div>
            </div>
        </>
    )
}


export default Home