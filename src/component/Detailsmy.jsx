import ImageCarousel from "./ImageCarousel ";
function Detailsmy({ object }) {
    console.log(object)
    function tab_categorie(data){
        var categorei = "" 
        for (let index = 0; index < data.length; index++) {
            if(index !== data.length - 1){
                categorei=+" " + data[index] ;
            }else{
                categorei=+" " + data[index] + " ," ;
            }
        }
        return categorei ;
    }
    return (
        <div className="annonce">
            <div className="details">
                <div className="caracteristique">
                        <span className="name_voiture">{object?.nomvoiture}</span>
                        <div className="by">
                            <span className="modele">{object?.nommodel}</span>
                            <span className="aps">by</span>
                            <span className="marque">{object?.nommarque}</span>
                        </div>
                        <div className="caracte">
                            <div className="about">
                                <div>
                                    <span className="label">Annee : </span>
                                    <span>{object?.anneefab}</span>
                                </div>
                                <div>
                                    <span className="label">Carburant : </span>
                                    <span>{object?.nomcarburant}</span>
                                </div>
                                <div>
                                    <span className="label">Transmission : </span>
                                    <span>{object?.nomtransmission}</span>
                                </div>
                                <div>
                                    <span className="label">Place : </span>
                                    <span>{object?.nombreplace}</span>
                                </div>
                            </div>
                            <div className="about">
                                <div>
                                    <span className="label">Vitesse : </span>
                                    <span>{object?.vitesse} km/h</span>
                                </div>
                                <div>
                                    <span className="label">Kilometrage : </span>
                                    <span> {object?.kilometrage} km</span>
                                </div>
                                <div>
                                    <span className="label">Categorie : </span>
                                    <span>{
                                        object?.categories && 
                                        tab_categorie(object?.categories)
                                    }</span>
                                </div>
                            </div>
                        </div>
                        <div className="prix">
                            <span>Prix</span>
                            <span className="pir"> {object?.prixvente} euro </span>
                        </div>                  
                </div>
                {
                    object?.photos &&
                        <ImageCarousel images_annonce={object?.photos}/>
                }
            </div>
        </div>
    );
}

export default Detailsmy;
