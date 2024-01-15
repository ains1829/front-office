import { useParams } from "react-router-dom"
import DetailsAnnonce from "../component/DetailsAnnonce";
import Header from '../component/Header'
import '../assets/scss/Card.css'
import '../assets/scss/styles.css'
import '../assets/scss/details.css'
import Footer from '../component/Footer'
import AboutModele from "../component/AboutModele";
import '../assets/fontawesome-5/css/all.min.css'
function Details(){
    const {id} = useParams() ;
    console.log(id)
    return (
        <div className="content-data">
        <Header />
            <div className="Details">
                <DetailsAnnonce idannonce={id} />
                <AboutModele idannonce={id} />
            </div>
        <Footer />
        </div>
    )
}
export default Details