import './card-wallet.scss'
import Card from '../card/card.jsx'
import logements from '../../data/logement.json'

const CardWallet = () => {
    return (
    
        <div className='wallet'>
            <div className='card-container'>
                {logements.map(({ id, title, cover }) => (
                    <Card key={id} title={title} imageUrl={cover} />
                ))}
            </div>
        </div>
    )
}

export default CardWallet