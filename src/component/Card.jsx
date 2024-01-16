import { Link } from "react-router-dom"
import '../assets/fontawesome-5/css/all.min.css'
import {useState } from "react"
function Card({object_annonce}){
    const [favoris , setFavoris] = useState(false)
    function check_favoris(){
        if(favoris === false){
            setFavoris(true)
        }else{
            setFavoris(false)
        }
    }
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
                <i onClick={check_favoris} className={`far fa-heart ${favoris === true ? 'fas fa-heart' : ''}`}></i>
            </div>
        </div>
    )
}
export default Card 