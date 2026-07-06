import './Collapse.scss'
import { useState } from 'react'
import arrow from '../../assets/arrow.png'

const Collapse = ({ title, content,className, isRounded }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
    if (!hasInteracted) setHasInteracted(true)
  }

  return (
    <div className={`collapse ${className || ''}`}>
      <div className={`collapse-header`} style={{ borderRadius: isRounded ? '15px' : '5px' }}>
        <h3 className='collapse-title'>{title}</h3>
        <img
          src={arrow}
          alt='Flèche ouvrante'
          className={`arrow ${hasInteracted ? (isOpen ? 'open' : 'closed') : ''}`}
          onClick={toggleCollapse}
        />
      </div>
      <div
        className={`collapse-content ${
          hasInteracted ? (isOpen ? 'visible' : 'hidden') : 'closed-initial'
        }`}
      >
        {content}
      </div>
    </div>
  )
}

export default Collapse