import Footer from "../component/Footer"
import FormRecherche from "../component/FormRecheche"
import Header from "../component/Header"
import { useState , useEffect } from 'react'
import '../assets/scss/Recherche.css'
import '../assets/scss/styles.css'
import Card from "../component/Card"
import nodata from '../assets/image/9169253.jpg'
import CardSekeleton from "../component/CardSekeleton"
import axios from "axios"
import { Https } from "../http/Http"
function Recherche(){
    const [Isloading , setLoading] = useState(true)
    const [Annonce , setAnnonce] = useState([]) 
    const [me, setMe] = useState(null)
    const [iduser , setIdUser] = useState(0)
    const token = localStorage.getItem('token')
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await fetch(`${Https().liens}/message/findUserConnected`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token} `,
                        'Content-Type': 'application/json',
                    }
                });
                if (response.status === 200) {
                    const result = await response.json();
                    setMe(result.data);
                } else {
                    localStorage.removeItem('token');
                }
            } catch (error) {
                console.log(error)
            }
        };
        fetchAPI();
    }, [token]);

    useEffect(() => {
        if (me !== null) {
            console.log(me.id)
            setIdUser(me.id);
        }
    }, [me]);
    useEffect(() => {
        if (me !== null) {
            console.log(`${Https().liens}/api/usermir/getPubAnnonces?iduser=${iduser}&nbaffiche=8&numlinebeforefirst=0`)
            fetch(`${Https().liens}/api/usermir/getPubAnnonces?iduser=${iduser}&nbaffiche=8&numlinebeforefirst=0`)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 200) {
                        setAnnonce(data.data);
                        console.log(data.data);
                        setLoading(false);
                    } else {
                        // alert(data.message + "  status : " + data.status)
                    }
                })
                .catch(error => {
                    console.log("errorr : " + error)
                });
        }
    }, [me, iduser]);
   const handleFormSubmit = (formData) => {
    console.log('Données du formulaire dans ParentComponent :', formData);
        setLoading(true)
        axios.post(`${Https().liens}/api/usermir/searchOnPubAnnonce`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            console.log(response.data);
            if(response.data.status === 200){
                    setAnnonce(response.data.data)
                    setLoading(false)
            }else{
                if(response.data.status === 201){
                    setAnnonce([])
                    setLoading(false)
                }
            }
        })
        .catch((error) => {
            console.error('Erreur lors de la requête:', error);
        });
    };
    return(
        <div className="content-data">
            <Header />
            <div className="formulaire">
                    <FormRecherche onSubmit={handleFormSubmit} />
                <div className="content-annonce">
                    <div className="Annonce">
                        {
                            Isloading ? <CardSekeleton /> : 
                            <>
                                {
                                    Annonce.length === 0 ? <div className="nodata">
                                        <img src={nodata} alt="..." />
                                    </div> : 
                                    Annonce.map((item, index) => (
                                        <Card key={index} object_annonce={item} />
                                    ))
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Recherche