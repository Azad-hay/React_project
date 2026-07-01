import './Carrousel.scss'
import { useState, useEffect } from 'react'
import arrowForward from '../../assets/arrow-forward.png'
import arrowBack from '../../assets/arrow-back.png'

const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1))
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [pictures])

  if (!pictures || pictures.length === 0) {
    return null
  }

  return (
    <div className='carrousel'>
      <div className='carrousel-image-container'>
        <img src={pictures[currentIndex]} alt={`Photo ${currentIndex + 1}`} className='carrousel-image' />
        {pictures.length > 1 && (
          <>
            <button className='carrousel-button prev' onClick={handlePrev}>
              <img src={arrowBack} alt='Précédent' />
            </button>
            <button className='carrousel-button next' onClick={handleNext}>
              <img src={arrowForward} alt='Suivant' />
            </button>
          </>
        )}
      </div>
      <div className='carrousel-counter'>
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  )
}

export default Carrousel