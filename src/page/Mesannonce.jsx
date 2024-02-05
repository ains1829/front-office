import Detailsmy from "../component/Detailsmy"
import '../assets/scss/styles.css'
import Footer from "../component/Footer"
import Header from "../component/Header"
import '../assets/fontawesome-5/css/all.min.css'
import ImageSekeleton from "../component/ImageSekeleton"
import { useState } from "react"
import SpanSkeleton from "../component/SpanSkeleton"
function Mesannonce(){
    const [Loading , setLoading] = useState(true) 
    const [loading_person , setLoading_perso] = useState(true)
    setTimeout(()=> {
        setLoading(false)
        setLoading_perso(false)
    },10000)
    return(
        <div className="content-data">
            <Header />
            <div className="mes_annonce">
                {
                    loading_person ? <SpanSkeleton /> : 
                    <>
                        <div className="en_vente">
                            <div>
                                <i className="fas fa-dollar-sign"></i>
                                <span>Voiture vendu</span>
                            </div>
                            <span>3</span>
                        </div>
                        <div className="favoris">
                            <div>
                                <i className="fas fa-heart"></i>
                                <span>Voiture en favoris</span>
                            </div>
                            <span>3</span>
                        </div>
                        <div className="nombre_voiture">
                            <div>
                                <i className="fas fa-paper-plane "></i>
                                <span>Mes Annonces</span>
                            </div>
                            <span>3</span>
                        </div>
                    </>
                }
                {
                    Loading ? <ImageSekeleton /> : 
                    <>
                        <Detailsmy id={1} />
                        <Detailsmy id={1} />
                    </>
                }
            </div>
            <Footer />
        </div>
    )
}
export default Mesannonce