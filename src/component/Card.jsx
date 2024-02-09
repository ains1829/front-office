import { Link } from "react-router-dom"
import '../assets/scss/Card.css'
import '../assets/scss/styles.css'
import '../assets/fontawesome-5/css/all.min.css'
import {useEffect, useState } from "react"
import axios from "axios"
import { Https } from "../http/Http"
function Card({ object_annonce }) {
    const token = localStorage.getItem('token')
    const [favoris, setFavoris] = useState(false)
    useEffect(()=>{
        setFavoris(object_annonce.estfavoris)
    } , [object_annonce.estfavoris])
    function check_favoris() {
        const selector = `.nb_favoris${object_annonce.idannonce}` 
        const nbfavroirs = document.querySelector(selector)
        if (favoris === false) {
            const valeur = parseInt(nbfavroirs.innerHTML) + 1
            document.querySelector(selector).innerHTML = valeur
            setFavoris(true)
        } else {
            const valeur = parseInt(nbfavroirs.innerHTML) - 1
            document.querySelector(selector).innerHTML = valeur
            setFavoris(false)
        }
        axios.get(`${Https().liens}/api/usermir/favorisation?idannonce=`+object_annonce.idannonce,  {
            headers : {
                'Content-Type' : 'application/json' ,
                'Authorization' : `Bearer ${token}` 
            }
        })
        .then((response) => {
            console.log(response.data);
            if(response.status === 403){
                console.log('check favoris ')
            }
        })
        .catch((error) => {
            console.error('Erreur lors de la requête:', error);
        });
        
    }
    return (
        <div className="card-object">
            <Link to={`/details/${object_annonce.idannonce}`}>
                <div>
                    {
                        object_annonce.photos && <>
                            <img src={object_annonce.photos[0]} alt="..." />
                        </>
                    }
                </div>
                
            </Link>
            <div className="some-details">
                    <span className="name">{object_annonce.nomvoiture}</span>
                    <div className="favoris">
                        <span className={`nb_favoris${object_annonce.idannonce}`}>{object_annonce.nbfavoris}</span>
                        <i onClick={check_favoris} className={`far fa-heart ${favoris ? 'fas fa-heart' : ''}`}></i>
                    </div>
                </div>
        </div>
    )
}
export default Card 