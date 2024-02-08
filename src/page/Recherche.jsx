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
function Recherche(){
    const [Isloading , setLoading] = useState(true)
    const [Annonce_valider , setAnnonce] = useState([]) 
    useEffect(() => { 
        setLoading(true);
        fetch('http://172.50.1.84:3000/api/usermir/getPubAnnonces?iduser=0&nbaffiche=100&numlinebeforefirst=0')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setAnnonce(data.data);
                    console.log(data.data)
                    setLoading(false)
                } else {
                    alert(data.message + "  status : " + data.status)
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
    }, [])
   const handleFormSubmit = (formData) => {
    console.log('Données du formulaire dans ParentComponent :', formData);
        setLoading(true)
        axios.post('http://172.50.1.84:3000/api/usermir/searchOnPubAnnonce', formData, {
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
                                    Annonce_valider.length === 0 ? <div className="nodata">
                                        <img src={nodata} alt="..." />
                                    </div> : 
                                    Annonce_valider.map((item, index) => (
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