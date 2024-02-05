import '../assets/fontawesome-5/css/all.min.css'
function FormRecherche(){
    return (
        <div className="recherche">
            <span className="title">Rechercher votre voiture</span>
            <form>
                <div className="mot-cles">
                    <div>
                        <input type="text" name="" id="" placeholder="Mot cles"/>
                    </div>
                </div>
                <div className="details">
                    <div>
                        <label htmlFor="">Categorie</label>
                        <select name="" id="">
                            <option value="">defaut</option>
                            <option value="">Familliale</option>
                            <option value="">Sport</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Marque</label>
                        <select name="" id="">
                            <option value="">default</option>
                            <option value="">Mercedes</option>
                            <option value="">Ferrari</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Modele</label>
                        <select name="" id="">
                            <option value="">defaut</option>
                            <option value="">Furari-Modele</option>
                            <option value="">SupraX-100</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Annee</label>
                        <input type="number" />
                    </div>
                </div>
                <div className="prix_content">
                    <label htmlFor="">Prix</label>
                    <div className="prix">
                        <input className="min" type="text" placeholder="min" />
                        <input type="text" placeholder="max" />
                    </div>
                </div>
                <div className="submit">
                    <label className='submit_' htmlFor="submit_button">Recherche <i className='fas fa-arrow-right'></i></label>
                    <input id="submit_button" style={{display:"none"}} type="submit" value="Rechercher" />
                </div>
            </form>
        </div>
    )
}
export default FormRecherche 