import Detailsmy from "../component/Detailsmy"
import '../assets/scss/styles.css'
import Footer from "../component/Footer"
import Header from "../component/Header"
import '../assets/fontawesome-5/css/all.min.css'
import ImageSekeleton from "../component/ImageSekeleton"
import { useState , useEffect} from "react"
import SpanSkeleton from "../component/SpanSkeleton"
import { Link, useNavigate } from "react-router-dom"
import { Https } from "../http/Http"
function Mesannonce(){
    const [Loading , setLoading] = useState(true) 
    const [loading_person , setLoading_perso] = useState(true)
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    if(token === null){
        navigate('/login')
    }
    const [Mesannonce, setMesannonce] = useState([])
    const [Activity , setActivity] = useState({iduser : 0 , nbannonce : 0 , nbvendu : 0 , nbfavoris  :0})
    useEffect(() => { 
        setLoading_perso(true);
        fetch(`${Https().liens}/api/usermir/activityUserAnnonce`,{
            method : 'POST',
            headers: { 
                'Content-Type': 'application' ,
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response =>response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setActivity(data.data);
                    setLoading_perso(false)
                } else {
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
    }, [token , navigate])
    useEffect(() => { 
        setLoading(true);
        fetch(`${Https().liens}/api/usermir/getMesAnnonces?nbaffiche=8&numlinebeforefirst=0`,{
            headers: { 
                'Content-Type': 'application' ,
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setMesannonce(data.data);
                    setLoading(false)
                } else {
                    setLoading(false)
                    if(data.status ===201){
                        setMesannonce([])
                    }
                }
            })
            .catch(error => {
                localStorage.removeItem('token')
                navigate('/login')
            });
    }, [token , navigate])
    return(
        <div className="content-data">
            <Header />
            <div className="mysolde">
                <Link to="/mysolde">
                    Voir mon Solde
                </Link>
            </div>
            <div className="mes_annonce">
                {
                    loading_person ? <SpanSkeleton /> : 
                    <>
                    <div className="content-data-me">
                        <div className="en_vente">
                            <span className="voiture_andy">Voiture vendu</span>
                            <span>{Activity.nbvendu}</span>
                        </div>
                        <div className="favoris">
                            <span className="voiture_andy">Voiture en favoris</span>
                            <span>{Activity.nbfavoris}</span>
                        </div>
                        <div className="nombre_voiture">
                            <span className="voiture_andy">Mes Annonces Valider</span>
                            <span>{Activity.nbannonce}</span>
                        </div>
                    </div>
                    </>
                }
                {
                    Loading ? <ImageSekeleton /> : 
                    <>
                        {
                            Mesannonce && 
                                Mesannonce.map((item , index)=>(
                                    <Detailsmy key={index} object={item} />
                                ))
                        }
                    </>
                }
            </div>
            <Footer />
        </div>
    )
}
export default Mesannonce