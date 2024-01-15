function FormRecherche(){
    return (
        <div className="recherche">
            <span className="title">Recherche</span>
            <form>
                <div>
                    <label htmlFor="">mot cles</label>
                    <input type="text" name="" id="" />
                </div>
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
                    <label htmlFor="">Prix</label>
                    <div className="prix">
                        <input className="min" type="text" placeholder="min" />
                        <input type="text" placeholder="max" />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Date sortie</label>
                    <input type="date" />
                </div>
                <div>
                    <input type="submit" value="Rechercher" />
                </div>
            </form>
        </div>
    )
}
export default FormRecherche 