import ImageCarousel from "./ImageCarousel ";
function Detailsmy({ id }) {
    console.log(id)
    return (
        <div className="annonce">
            <div className="details">
                <ImageCarousel />
                <div className="caracteristique">
                    <h1>Caracteristique</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td className="label">Nom voiture  </td>
                                <td className="of">Tiguan wolsvagen</td>
                            </tr>
                            <tr>
                                <td className="label">Date d'annonce  </td>
                                <td className="simple-label">2023-05-04</td>
                            </tr>
                            <tr>
                                <td className="label">Marque  </td>
                                <td className="simple-label">BMW</td>
                            </tr>
                            <tr>
                                <td className="label">Model  </td>
                                <td className="simple-label">Gorolla</td>
                            </tr>
                            <tr>
                                <td className="label">Carburant </td>
                                <td className="simple-label">Essence</td>
                            </tr>
                            <tr>
                                <td className="label">Vitesse  </td>
                                <td className="simple-label">205km/h</td>
                            </tr>
                            <tr>
                                <td className="label">Kilometrage </td>
                                <td className="simple-label">4500 km</td>
                            </tr>
                            <tr>
                                <td className="label">Categorie  </td>
                                <td className="simple-label">Famille , Sportif</td>
                            </tr>
                            <tr>
                                <td className="label">Transmission  </td>
                                <td className="simple-label">Automatique</td>
                            </tr>
                            <tr>
                                <td className="label">Annee  </td>
                                <td className="simple-label">2021</td>
                            </tr>
                            <tr>
                                <td className="label">Tarif  </td>
                                <td className="simple-label">1000000 ariary</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Detailsmy;
