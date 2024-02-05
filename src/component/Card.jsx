import { Link } from "react-router-dom"
import '../assets/scss/Card.css'
import '../assets/scss/styles.css'
import '../assets/fontawesome-5/css/all.min.css'
import { useState } from "react"
function Card({ object_annonce }) {
    // const [favoris, setFavoris] = useState(object_annonce.estfavoris)
    const [favoris, setFavoris] = useState(false)
    function check_favoris() {
        if (favoris === false) {
            setFavoris(true)
        } else {
            setFavoris(false)
        }
    }
    return (
        <div className="card-object">
            {/* <Link to={`/details/${object_annonce.idannonce}`}> */}
            <Link to={`/details/1`}>
                <div>
                    {/* <img src={object_annonce.photos[0]} alt="..." /> */}
                    <img src={object_annonce} alt="..." />
                </div>
                
            </Link>
            <div className="some-details">
                    {/* <span>Marque : {object_annonce.nommarque}</span> */}
                    <span className="name">Lamborghini Max</span>
                    <div className="favoris">
                        <span>5</span>
                        <i onClick={check_favoris} className={`far fa-heart ${favoris === true ? 'fas fa-heart' : ''}`}></i>
                    </div>
                </div>
        </div>
    )
}
export default Card 