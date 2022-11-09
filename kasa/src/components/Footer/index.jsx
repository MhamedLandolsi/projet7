import '../../Styles/components/footer.scss'
import icon from '../../assets/black-icon.svg'
import { GlobalContext } from '../../utils/GlobalScope';
import { useContext } from 'react';

function Footer(){
    const { error } = useContext(GlobalContext)

    return (
        
        error || (<footer>
            <img src={icon} alt='footer img'></img>
            <h2>© 2020 Kasa. All rights reserved</h2>

        </footer>)
      )
}

export default Footer