import SectionImg from "../../components/SectionImg"
import img from "../../assets/background-home.png"
import data from "../../assets/data/logements.json"
import Thumb from "../../components/Thumb";
import "../../Styles/pages/home.scss"

function Accueil() {
  
  return (
    <div className="home">
      <SectionImg img={img} text="Chez vous, partout et ailleurs"></SectionImg>
      
      <div className="liste">
        {data.map((item) => (
          <Thumb text={item.title} img={item.cover}  ids={item.id} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Accueil