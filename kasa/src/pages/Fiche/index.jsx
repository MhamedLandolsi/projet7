import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

import data from "../../assets/data/logements.json"
import Gallery from '../../components/Gallery';
import "../../Styles/pages/fiche.scss"

function Fiche() {
  const { id } = useParams()

  const product = data.find((d) => d.id === id)


  return (
    !product ? <Navigate to="/404"></Navigate > : (
      <div className='fiche'>
        <div className='fiche-item1'>
          <Gallery images={product.pictures} loop="3000"></Gallery>
        </div>
      </div>
    )
  )
}

export default Fiche