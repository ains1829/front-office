import { Link } from "react-router-dom"
import '../assets/fontawesome-5/css/all.min.css'
import {useState } from "react"
function CardFavoris({object_annonce}){
    const [favoris , setFavoris] = useState(true)
    function check_favoris(){
        if(favoris === false){
            setFavoris(true)
        }else{
            setFavoris(false)
        }
    }
    return (
        <div className="card-favorie">
            <Link to={`/details/1`}>
                <div>
                    <img src={object_annonce} alt="..." />
                </div>
                <div className="some-details">
                    <span className="nom">Nom : Mercedes G class</span>
                    <span>Marque : Mercedes</span>
                    <span className="prix">Prix : 14500000 ar</span>
                    <label>Description</label>
                    <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquam, eos accusantium assumenda ratione cupiditate non. Id ad accusanti </span>
                </div>
            </Link>
            <div className="favoris">
                <i onClick={check_favoris} className={`${favoris === true ? 'isfavorie fas fa-heart' : ' not far fa-heart '}`}></i>
            </div>
        </div>
    )
}
export default CardFavoris 