import ImageCarousel from "./ImageCarousel ";
function Detailsmy({ id }) {
    console.log(id)
    return (
        <div className="annonce">
            <div className="details">
                <div className="caracteristique">
                        <span className="name_voiture">Tiguan wolsvagen</span>
                        <div className="by">
                            <span className="modele">Gorolla</span>
                            <span className="aps">by</span>
                            <span className="marque">BMW</span>
                        </div>
                        <div className="caracte">
                            <div className="about">
                                <div>
                                    <span className="label">Annee : </span>
                                    <span>2023</span>
                                </div>
                                <div>
                                    <span className="label">Carburant : </span>
                                    <span>Essence</span>
                                </div>
                                <div>
                                    <span className="label">Transmission : </span>
                                    <span>Automatique</span>
                                </div>
                                <div>
                                    <span className="label">Place : </span>
                                    <span>4</span>
                                </div>
                            </div>
                            <div className="about">
                                <div>
                                    <span className="label">Vitesse : </span>
                                    <span>205 km/h</span>
                                </div>
                                <div>
                                    <span className="label">Kilometrage : </span>
                                    <span>4500 km</span>
                                </div>
                                <div>
                                    <span className="label">Categorie : </span>
                                    <span>Famille , Sportif</span>
                                </div>
                            </div>
                        </div>
                        <div className="prix">
                            <span>Prix</span>
                            <span className="pir"> 1000000 euro </span>
                        </div>                  
                </div>
                <ImageCarousel />
            </div>
        </div>
    );
}

export default Detailsmy;
