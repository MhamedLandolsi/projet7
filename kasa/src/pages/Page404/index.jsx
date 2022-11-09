import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom"
import "../../Styles/pages/page404.scss"
import { GlobalContext } from "../../utils/GlobalScope";


function Page404() {

  const { setError } = useContext(GlobalContext)

  useEffect(() => {
    setError(() => true);

    return () => {
        setError(() => false);
    }
  }, [setError])

  return (
    <div className="page404">
      <div className="item1">404</div>

      <div className="item2">Oups! La page que vous demandez n'existe pas.</div>

      <NavLink className="item3" to="/" end={true}>Retourner sur la page d’accueil</NavLink>
    </div>
  )
}

export default Page404