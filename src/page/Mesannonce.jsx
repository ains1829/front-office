import Detailsmy from "../component/Detailsmy"
import '../assets/scss/styles.css'
import Footer from "../component/Footer"
import Header from "../component/Header"
function Mesannonce(){
    return(
        <div className="content-data">
            <Header />
            <div className="mes_annonce">
                <Detailsmy id={1} />
                <Detailsmy id={1} />
            </div>
            <Footer />
        </div>
    )
}
export default Mesannonce