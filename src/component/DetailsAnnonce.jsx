import { Link } from "react-router-dom"
import Mycarousel from "./Carousel"
import { useState , useEffect} from "react"
function DetailsAnnonce({ idannonce }) {
    console.log(idannonce)
    const [Details , setDetails] = useState(null)
     useEffect(() => { 
        fetch('http://192.168.43.165:3000/api/usermir/getDetailAnnonce?iduser=0&idannonce='+idannonce)
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                if (data.status === 200) {
                    setDetails(data.data);
                } else {
                    alert(data.message + "  status : " + data.status)
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
    }, [idannonce])
    return (
        <div className="details">
            <div className="photo-car">
                {
                    Details?.photos &&
                        <Mycarousel photos={Details?.photos} />
                }
            </div>
            <div className="about-car">
                <h1>Caracteristique</h1>
                <div>
                    <span className="label">Nom voiture : </span><span className="of">{Details?.nomvoiture}</span>
                </div>
                <div>
                    <span className="label">Marque : </span><span className="simple-label">{Details?.nommarque}</span>
                </div>
                <div>
                    <span className="label">Nombre place : </span><span className="simple-label">{Details?.nombreplace}</span>
                </div>
                <div>
                    <span className="label">Model : </span><span className="simple-label">{Details?.nommodel}</span>
                </div>
                <div>
                    <span className="label">Carburant : </span><span className="simple-label">{Details?.nomcarburant}</span>
                </div>
                <div>
                    <span className="label">Vitesse : </span><span className="simple-label">{Details?.vitesse} km/h</span>
                </div>
                <div>
                    <span className="label">Kilomatrage :</span> <span className="simple-label"> {Details?.kilometrage} km</span>
                </div>
                <div>
                    <span className="label">Categorie : </span> <span className="simple-label">Famille , Sportif</span>
                </div>
                <div>
                    <span className="label">Transmission : </span><span className="simple-label">{Details?.nomtransmission}</span>
                </div>
                <div>
                    <span className="label">Annee : {Details?.anneefab}</span>
                </div>
                <div className="vendeur">
                    <label htmlFor="">Description</label>
                    <span className="desc">{Details?.descriptions} </span>
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