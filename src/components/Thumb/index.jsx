import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import "../../Styles/components/thumb.scss"
function Thumb({ img, text, ids }) {

    return (
        <NavLink className='thumb' to={`/fiche-logement/${ids}`} style={{ backgroundImage: `url('${img}')` }} end={true}>
                <div className='label'>{text}</div>

        </NavLink>
    )
}

Thumb.protoType = {
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
export default Thumb