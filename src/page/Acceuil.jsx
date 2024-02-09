import Header from '../component/Header'
import '../assets/scss/Card.css'
import '../assets/scss/styles.css'
import Affiche from '../component/Affiche'
import Card from '../component/Card'
import { useState, useEffect } from 'react'
import Footer from '../component/Footer'
import CardSekeleton from '../component/CardSekeleton'
import { Https } from '../http/Http'

function Acceuils() {
    const [Isloading, setLoading] = useState(true)
    const [Annonce, setAnnonce] = useState([]) // Correction ici
    const [Page, setPage] = useState(0);
    const [next_page, setNextPage] = useState(false)
    const [previous_page, setPreviouspage] = useState(false)
    const token = localStorage.getItem('token')
    const [me, setMe] = useState(null)
    const [iduser , setIdUser] = useState(0)

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
                    setIdUser(result.data.id)
                    console.log("iduser = " + result.data.id)
                } else {
                    localStorage.removeItem('token');
                }
            } catch (error) {
                console.log(error)
            }
        };
        fetchAPI();
    }, [token]);
    useEffect(()=>{
        if(iduser===0){
            fetch(`${Https().liens}/api/usermir/getPubAnnonces?iduser=0&nbaffiche=8&numlinebeforefirst=0`)
                .then(response => response.json())
                .then(data => {
                    console.log("data="+JSON.stringify(data.data)) 
                    if (data.status === 200) {
                        setNextPage(data.canNext)
                        setPreviouspage(data.canPrev)
                        setAnnonce([]);
                        setAnnonce(data.data);
                        console.log(data.data)
                        setLoading(false)
                    } else {
                    }
                })
                .catch(error => {
                    console.log("errorr : " + error)
                });
            }else{
                fetch(`${Https().liens}/api/usermir/getPubAnnonces?iduser=${iduser}&nbaffiche=8&numlinebeforefirst=0`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 200) {
                            setNextPage(data.canNext)
                            setPreviouspage(data.canPrev)
                            setAnnonce(data.data);
                            console.log(data.data)
                            setLoading(false)
                        } else {
                        }
                    })
                    .catch(error => {
                        console.log("errorr : " + error)
                });
        }
    },[me,iduser])

    const handle_next = () => {
        setPage(Page + 8)
        const pag = Page + 8;
        setLoading(true);
        fetch(`${Https().liens}/api/usermir/getPubAnnonces?iduser=${iduser}&nbaffiche=8&numlinebeforefirst=${pag}`)
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
                    // alert(data.message + "  status : " + data.status)
                }
            })
            .catch(error => {
                console.log("errorr : " + error)
            });
    }

    const handle_previous = () => {
        setPage(Page - 8)
        const pag = Page - 8;
        setLoading(true);
        fetch(`${Https().liens}/api/usermir/getPubAnnonces?iduser=${iduser}&nbaffiche=8&numlinebeforefirst=${pag}`)
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
                    // alert(data.message + "  status : " + data.status)
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
                                Annonce &&
                                Annonce.map((item, index) => (
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
                                next_page ? <div className='add' onClick={handle_next}> <i className='fas fa-arrow-right'></i>  <span>Next </span> </div> : ''
                            }

                        </div>
                    </>
            }
            <Footer />
        </div>
    )
}

export default Acceuils
