import Header from '../component/Header'
import '../assets/scss/Card.css'
import '../assets/scss/styles.css'
import Affiche from '../component/Affiche'
import Card from '../component/Card'
// import Occasion from '../assets/image/occasion.jpg'
import {useState , useEffect } from 'react'
import Footer from '../component/Footer'
import CardSekeleton from '../component/CardSekeleton'
function Acceuils() {
    const [Isloading , setLoading] = useState(true)
    const [Annonce_valider , setAnnonce] = useState([]) 
    const [Page , setPage] = useState(0) ;
    const [next_page , setNextPage] = useState(false)
    const [previous_page , setPreviouspage] = useState(false)
    useEffect(() => { 
        setLoading(true);
        fetch('http://192.168.43.240:3000/api/usermir/getPubAnnonces?iduser=0&nbaffiche=8&numlinebeforefirst=0')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    setNextPage(data.canNext)
                    setPreviouspage(data.canPrev)
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
    const handle_next = () => {
        setPage(Page + 8) 
        const pag = Page + 8 ;
        setLoading(true);
        console.log('http://192.168.43.240:3000/api/usermir/getPubAnnonces?iduser=0&nbaffiche=8&numlinebeforefirst='+pag)
        fetch('http://192.168.43.240:3000/api/usermir/getPubAnnonces?iduser=0&nbaffiche=8&numlinebeforefirst='+pag)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.status === 200) {
                setNextPage(data.canNext)
                setPreviouspage(data.canPrev)
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
    }
    const handle_previous = () => {
        setPage(Page - 8) 
        const pag = Page - 8 ;
        setLoading(true);
        fetch('http://192.168.43.240:3000/api/usermir/getPubAnnonces?iduser=0&nbaffiche=8&numlinebeforefirst='+pag)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.status === 200) {
                setNextPage(data.canNext)
                setPreviouspage(data.canPrev)
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
                            <Card key={index} object_annonce={item} />
                        ))
                    }
                    </>
                }
            </div>
            {
                Isloading ? '' :
                <>
                    <div className='pagination'>
                        {
                            previous_page ? <div className='previsous' onClick={handle_previous}>  <span>Previous</span>  <i className='fas fa-arrow-left'></i></div> : ''
                        }
                        
                        {
                            next_page ?  <div className='add' onClick={handle_next}> <i className='fas fa-arrow-right'></i>  <span>Next </span> </div> : ''
                        }
                       
                    </div>
                </>
            }
            <Footer />
        </div>

    )
}
export default Acceuils