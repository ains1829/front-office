import { useState , useEffect } from 'react';
import '../assets/fontawesome-5/css/all.min.css'
import { Https } from '../http/Http';
function FormRecherche({onSubmit}){
    const [word , setWord] = useState('')
    const [categorie , setCategorie] = useState([])
    const [marque , setMarque] = useState(0)
    const [modele , setModele] = useState(0)
    const [Annee , setAnnee] = useState(0)
    const [prixMin , setPrixMin] = useState(0)
    const [prixMax , setPrixMax] = useState(0)
    const [place , setPlace] = useState(0)
    const handleWord = (e) =>{
        setWord(e.target.value);
    }
    const hanldeCategorie = (e) => {
        if(e.target.value === 0) {
            setCategorie([])
        }else{
            setCategorie([e.target.value])
        }
    }
    const handleMarque = (e) => {
        setMarque(e.target.value)
        fetch(`${Https().liens}/api/usermir/getModelsParMarque?idmarque=`+e.target.value)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setallModele(data.data.models);
                } else {
                    if(data.status === 201){
                        setallModele([])
                    }
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
    }
    const handleModele = (e) => {
        setModele(e.target.value)
    }
    const handleAnnee = (e) => {
        setAnnee(e.target.value)
    }
    const handlePrixmin = (e) => {
        setPrixMin(e.target.value)
    }
    const handlePrixmax = (e) => {
        setPrixMax(e.target.value)
    }
    const hanldePlace = (e) => {
        setPlace(e.target.value)
    }
    const formData = {
        "iduser" : 0 ,
        "word" : word ,
        "idmarque" : marque,
        "idmodel" : modele ,
        "nbplace" : place ,
        "prix1" : prixMin ,
        "prix2" : prixMax,
        "anneefab" : Annee ,
        "idcategories" : categorie
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };
    const [all_categorie , setAllcategorie]  = useState([])
    useEffect(() => { 
        fetch(`${Https().liens}/categorie/allCategorie`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setAllcategorie(data.data);
                    console.log(data.data)
                } else {
                    // alert(data.message + "  status : " + data.status)
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
    }, [])
    const [all_marque , setAllmarque]  = useState([])
    useEffect(() => { 
        fetch(`${Https().liens}/marque/allMarque`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setAllmarque(data.data);
                    console.log(data.data)
                } else {
                    // alert(data.message + "  status : " + data.status)
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
    }, [])
    const [all_modele , setallModele] = useState([])
    useEffect(() => { 
         fetch(`${Https().liens}/api/usermir/getModelsParMarque?idmarque=0`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setallModele(data.data.models);
                } else {
                    // alert(data.message + "  status : " + data.status)
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
    }, [])
    return (
        <div className="recherche">
            <span className="title">Rechercher votre voiture</span>
            <form onSubmit={handleSubmit}>
                <div className="mot-cles">
                    <div>
                        <input type="text" value={word} onChange={handleWord} placeholder="Mot cles"/>
                    </div>
                </div>
                <div className="details">
                    <div>
                        <label>Categorie</label>
                        <select onChange={hanldeCategorie}>
                            <option value="0">defaut</option>
                            {
                                all_categorie && 
                                all_categorie.map((item , index) =>(
                                    <option key={index} value={item.idCategorie}>{item.nomCategorie}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label>Marque</label>
                        <select onChange={handleMarque}>
                            <option value="0">default</option>
                            {
                                all_marque && 
                                all_marque.map((item , index) =>(
                                    <option key={index} value={item.idMarque}>{item.nomMarque}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label>Modele</label>
                        <select onChange={handleModele}>
                            <option value="0">defaut</option>
                            {
                                all_modele && all_modele.map((item , index)=>(
                                    <option key={index} value={item?.idmodel}>{item?.nommodel}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label>Annee</label>
                        <input onChange={handleAnnee} type="number" />
                    </div>
                    <div>
                        <label>Nombre place</label>
                        <input onChange={hanldePlace} type="number" />
                    </div>
                </div>
                <div className="prix_content">
                    <label>Prix</label>
                    <div className="prix">
                        <input onChange={handlePrixmin} className="min" type="text" placeholder="min" />
                        <input onChange={handlePrixmax} type="text" placeholder="max" />
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