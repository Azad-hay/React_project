import { useParams, Navigate } from 'react-router-dom'
import logements from '../../data/logement.json'
import Star from '../../components/Stars/Stars.jsx'
import Title from '../../components/Title/Title.jsx'
import Name from '../../components/Name/Name.jsx'
import Tag from '../../components/Tag/Tag.jsx'
import Collapse from '../../components/Collapse/Collapse.jsx'
import Carrousel from '../../components/Carrousel/Carrousel.jsx'

import './Logements.scss'

const Logements = () => {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to='/404' state={{ fromLogement: true }} />
  }

  const ListEquipement = () => (
    <ul className='equipments-list'>
      {logement.equipments.map((item, index) => (
        <li key={`${item}-${index}`}>{item}  </li>
      ))}
    </ul>
  )

  return (
    <main className='logement'>
      <Carrousel pictures={logement.pictures} />
      <div className='logement-content'>

        <Title title={logement.title} location={logement.location} className='logement-title' />
        <div className='tags'>
          {logement.tags.map((tag, index) => (
          <Tag key={index} tag={tag} className='tag' />
          )) }
        </div>
        <div className='host-info'>
          <div className='stars'>
            {Array.from({ length: 5 }, (_, index) => (
            <Star key={index} active={index < Number(logement.rating)}  className='star'/>
            ))}
          </div>
          <Name name={logement.host.name} picture={logement.host.picture} />
        </div>
        <div className='collapse-container'>
        <Collapse title='Description' content={logement.description} className='description-collapse collapse' />
        <Collapse title='Équipements' content={<ListEquipement />} className='equipement-collapse collapse' />
        </div>
      </div>
    </main>
  )
}

export default Logements


/*
	{
		"id": "c67ab8a7",
		"title": "Appartement cosy",
		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
		"pictures": [
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
		],
		"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
		"host": {
			"name": "Nathalie Jean",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
		},
		"rating": "5",
		"location": "Ile de France - Paris 17e",
		"equipments": [
			"Équipements de base",
			"Micro-Ondes",
			"Douche italienne",
			"Frigo",
			"WIFI"
		],
		"tags": [
			"Batignolle",
			"Montmartre"
		]
	},*/