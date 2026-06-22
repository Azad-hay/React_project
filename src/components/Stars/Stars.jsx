import './Stars.scss'
import active from '../../assets/star-active.png'
import inactive from '../../assets/star-inactive.png'

const Stars = ({ stars }) => {
    const range = [1, 2, 3, 4, 5]

    return (
        <div>
            {range.map((star) => (
                <span key={star} className='rating'>
                    <img src={star <= stars ? active : inactive} alt={star <= stars ? 'Active Star' : 'Inactive Star'} />
                </span>
            ))}
        </div>
    )
}

export default Stars