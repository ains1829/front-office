import Header from '../component/Header'
import '../assets/scss/Card.css'
import '../assets/scss/styles.css'
import Affiche from '../component/Affiche'
import Card from '../component/Card'
import Occasion from '../assets/image/occasion.jpg'
import {useState } from 'react'
import Footer from '../component/Footer'
import CardSekeleton from '../component/CardSekeleton'
function Acceuils() {
    const [Isloading , setLoading] = useState(true)
    const [Annonce_valider , setAnnonce] = useState([1,2,3,4,5,6,7,8])
    // useEffect(() => {
    //     setLoading(true);
    //     fetch('http://192.168.43.240:3000/api/usermir/getPubAnnonces?iduser=0&nbaffiche=100&numlinebeforefirst=0')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.status === 200) {
    //                 setAnnonce(data.data);
    //                 console.log(data.data)
    //                 setLoading(false)
    //             } else {
    //                 alert(data.message + "  status : " + data.status)
    //             }
    //         })
    //         .catch(error => {
    //             console.log("errorr : " + error)
    //         });
    // }, [])
    setTimeout(()=>{
        setLoading(false) ;
    },10000)
    const hanldeButton = () => {
        console.log('next')
    }
    return (
        <div className='content-data'>
            <Header />
            <div className='content-affiche'>
                <Affiche />
            </div>
            <div className='Annonce'>
                {
                    Isloading ? <CardSekeleton /> : 
                    <>
                    {
                        Annonce_valider &&
                        Annonce_valider.map((item , index) =>(
                            <Card key={index} object_annonce={Occasion} />
                        ))
                    }
                    </>
                }
            </div>
            {
                Isloading ? '' :
                <>
                    <div className='pagination'>
                        <div className='previsous' onClick={hanldeButton}>  <span>Previous</span>  <i className='fas fa-arrow-left'></i></div>
                        <div className='add' onClick={hanldeButton}> <i className='fas fa-arrow-right'></i>  <span>Next </span> </div>
                    </div>
                </>
            }
            <Footer />
        </div>

    )
}
export default Acceuils