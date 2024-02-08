import { Link } from "react-router-dom"
import ChoixMessage from "./ChoixMessage"
import { useState , useEffect} from "react"
function AboutModele({ idannonce }) {
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
    const [choix, setchoix] = useState(false)
    function ChangeChoix() {
        setchoix(true)
    }
    return (
        <div className="content-modele-message">
            <div id="modele" className="modele">
                <div className="Title"> {Details?.nomvoiture} </div>
                <div className="prix">
                    <span className="p">Prix : </span>
                    <span className="price">{Details?.prixvente} ar</span>
                </div>
                <div className="annonce">Publier il y a : {Details?.dateformaterannonce}</div>
                <Link onClick={ChangeChoix}>
                    <div className="contact" >
                        <i className="fas fa-envelope"></i>
                        <span>
                            Contacter
                        </span>
                    </div>
                </Link>
            </div>
            {
                choix === true ? <ChoixMessage idannonce={idannonce} /> : ""
            }
        </div>
    )
}
export default AboutModele