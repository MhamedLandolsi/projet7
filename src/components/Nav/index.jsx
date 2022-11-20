import { NavLink } from 'react-router-dom'
import '../../Styles/components/nav.scss'
function Nav() {
  return (
    <nav className='_nav'>
      <NavLink className='nav-item nav-item-first' to="/" end ={true}>Accueil</NavLink>
      <NavLink className='nav-item' to="/a-propos">A propos</NavLink>
    </nav>
  )
}

export default Nav