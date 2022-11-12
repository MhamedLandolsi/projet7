import Star from "../Star";
import '../../Styles/components/stars.scss'


function Stars({ count }) {
    const list = [...Array(5).keys()];

    return (
        <div className="stars">
            {list.map((item) => (<Star key={item} active={item < count}> </Star>))}
        </div>
    )
}


export default Stars