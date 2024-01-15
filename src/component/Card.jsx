import { Link } from "react-router-dom"
import '../assets/fontawesome-5/css/all.min.css'
function Card({object_annonce}){
    return (
        <div className="card-object">
            <Link to={`/details/1`}>
                <div>
                    <img src={object_annonce} alt="..." />
                </div>
                <div className="some-details">
                    <span>Marque : Mercedes</span>
                    <span>Nom : Mercedes G class</span>
                    <span className="prix">Prix : 14500000 ar</span>
                </div>
            </Link>
            <div className="favoris">
                <i className="far fa-heart"></i>
            </div>
        </div>
    )
}
export default Card 