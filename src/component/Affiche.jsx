import { Link } from "react-router-dom"

function Affiche(){
    return(
        <div className="affiche">
            <div className='pub'>
                <span>
                    Trouvez la voiture d'occasion parfaite sur notre site des maintenant
                </span>
                <Link>
                    Rejoingnez Nous
                </Link>
            </div>
        </div>
    )
}
export default Affiche