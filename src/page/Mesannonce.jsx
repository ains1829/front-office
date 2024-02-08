import Detailsmy from "../component/Detailsmy"
import '../assets/scss/styles.css'
import Footer from "../component/Footer"
import Header from "../component/Header"
import '../assets/fontawesome-5/css/all.min.css'
import ImageSekeleton from "../component/ImageSekeleton"
import { useState } from "react"
import SpanSkeleton from "../component/SpanSkeleton"
import { useNavigate } from "react-router-dom"
function Mesannonce(){
    const [Loading , setLoading] = useState(true) 
    const [loading_person , setLoading_perso] = useState(true)
    const navigate = useNavigate()
    setTimeout(()=> {
        setLoading(false)
        setLoading_perso(false)
    },10000) 
    const token = localStorage.getItem('token')
    if(token === null){
        navigate('/login')
    }
    return(
        <div className="content-data">
            <Header />
            <div className="mes_annonce">
                {
                    loading_person ? <SpanSkeleton /> : 
                    <>
                    <div className="content-data-me">
                        <div className="en_vente">
                            <span className="voiture_andy">Voiture vendu</span>
                            <span>3</span>
                        </div>
                        <div className="favoris">
                            <span className="voiture_andy">Voiture en favoris</span>
                            <span>3</span>
                        </div>
                        <div className="nombre_voiture">
                            <span className="voiture_andy">Mes Annonces</span>
                            <span>3</span>
                        </div>
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