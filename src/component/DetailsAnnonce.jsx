import { Link } from "react-router-dom"
import Mycarousel from "./Carousel"
function DetailsAnnonce({idannonce}){
    console.log(idannonce)
    return (
        <div className="details">
            <div className="photo-car">
                <Mycarousel id={idannonce} />
            </div>
            <div className="about-car">
                <h1>Caracteristique</h1>
                <div>
                    <span className="label">Nom voiture : </span><span className="of">Tiguan wolsvagen</span>
                </div>
                <div>
                    <span className="label">Date d'annonce : </span><span className="simple-label">2023-05-04</span>
                </div>
                <div>
                    <span className="label">Model : </span><span className="simple-label">Gorolla</span>
                </div>
                <div>
                    <span className="label">Carburant :</span><span className="simple-label">Essence</span>
                </div>
                <div>
                    <span className="label">Vitesse : </span><span className="simple-label">205km/h</span>
                </div>
                <div>
                    <span className="label">Kilomatrage :</span> <span className="simple-label"> 4500 km</span>
                </div>
                <div>
                    <span className="label">Categorie : </span> <span className="simple-label">Famille , Sportif</span>
                </div>
                <div>
                    <span className="label">Transmission : </span><span className="simple-label">Automatique</span>
                </div>
                <div>
                    <span className="label">Annee : 2021</span>
                </div>
                <div className="vendeur">
                    <label htmlFor="">Garantie du vendeur</label>
                    <span className="simple-label">Le vendeur a déclaré que le véhicule est dans un état supérieur à la moyenne pour les véhicules de cet âge </span>
                </div>
                <div className="contact">
                    <Link to="#modele">
                        Contacter le vendeur
                    </Link>
                </div>
            </div>
    </div>
    )
}
export default DetailsAnnonce