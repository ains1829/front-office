import Mycarousel from "./Carousel";
function Detailsmy({id}){
    return(
        <div className="annonce">
            <div className="title"> MERCEDES G CLASS 2018</div>
            <div className="details">
                <Mycarousel id={id} />
                <div className="caracteristique">
                    <h1>Carateristique</h1>
                    <table>
                        <tr>
                            <td className="label">Nom voiture : </td><td className="of">Tiguan wolsvagen</td>
                        </tr>
                        <tr>
                            <td className="label">Date d'annonce : </td><td className="simple-label">2023-05-04</td>
                        </tr>
                        <tr>
                            <td className="label">Model : </td><td className="simple-label">Gorolla</td>
                        </tr>
                        <tr>
                            <td className="label">Carburant :</td><td className="simple-label">Essence</td>
                        </tr>
                        <tr>
                            <td className="label">Vitesse : </td><td className="simple-label">205km/h</td>
                        </tr>
                        <tr>
                            <td className="label">Kilomatrage :</td> <td className="simple-label"> 4500 km</td>
                        </tr>
                        <tr>
                            <td className="label">Categorie : </td> <td className="simple-label">Famille , Sportif</td>
                        </tr>
                        <tr>
                            <td className="label">Transmission : </td><td className="simple-label">Automatique</td>
                        </tr>
                        <tr>
                            <td className="label">Annee : </td> <td>2021</td>
                        </tr>
                    </table>
                    <div className="tarif">
                        <span className="span">votre tarif</span> <br />
                        <span className="money">10000000 ariary</span>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detailsmy