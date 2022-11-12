import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

import data from "../../assets/data/logements.json"
import Gallery from '../../components/Gallery';
import Profile from '../../components/Profile';
import Stars from '../../components/Stars';
import Tag from '../../components/Tag';
import Collapse from '../../components/Collapse'

import "../../Styles/pages/fiche.scss"

function Fiche() {
  const { id } = useParams()

  const product = data.find((d) => d.id === id)

  return (
    !product ? <Navigate to="/404"></Navigate > : (
      <div className='fiche'>
        <section className='fiche-item1'>
          <Gallery images={product.pictures} loop="3000"></Gallery>
        </section>
        <section className='fiche-content-header'>
          <div className='fiche-content-header-left'>
            <div className='fiche-content-header-left-title'>
              {product.title}
            </div>
            <div className='fiche-content-header-left-location'>
              {product.location}
            </div>
            <div className='fiche-content-header-left-tag'>
              {product.tags.map((tag) => (
                <Tag key={tag} text={tag}> </Tag>
              ))}
            </div>
          </div>
          <div className='fiche-content-header-right'>
            <Profile firstname={product.host.name} img={product.host.picture}></Profile>
            <Stars count={product.rating}></Stars>
          </div>
        </section>
        <section className='fiche-content-body'>
          <Collapse title="Description" open={false}> <div> {product.description} </div></Collapse>
          <Collapse title="Équipements" open={false}>
            <ul className='fiche-content-body-equipment'>
              {product.equipments.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Collapse>
        </section>
      </div>
    )
  )
}

export default Fiche