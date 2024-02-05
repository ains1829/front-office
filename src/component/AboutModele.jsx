import { Link } from "react-router-dom"
import ChoixMessage from "./ChoixMessage"
import { useState } from "react"
function AboutModele({ idannonce }) {
    console.log(idannonce)
    const [choix, setchoix] = useState(false)
    function ChangeChoix() {
        setchoix(true)
    }
    return (
        <div className="content-modele-message">
            <div id="modele" className="modele">
                <div className="Title"> MERCEDES CLASSE A IV </div>
                <div className="prix">
                    <span className="p">Prix : </span>
                    <span className="price">65000 ar</span>
                </div>
                <div className="annonce">annoncer le : 2023-05-24</div>
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