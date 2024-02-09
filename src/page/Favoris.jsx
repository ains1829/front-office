import Header from '../component/Header'
import '../assets/scss/styles.css'
import Footer from '../component/Footer'
import '../assets/fontawesome-5/css/all.min.css'
import { useState , useEffect} from 'react'
import Card from '../component/Card'
import CardSekeleton from '../component/CardSekeleton'
import nodata from '../assets/image/9169253.jpg'
import { useNavigate } from 'react-router-dom'
import { Https } from '../http/Http'
function Favoris() {
    const [Isloading , setLoading] = useState(true) ;
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [Favoris_all , setFavoris_all] = useState([]) ;
    if(token === null){
        navigate('/login')
    }
     useEffect(() => { 
        setLoading(true);
        fetch(`${Https().liens}/api/usermir/getMesAnnoncesFavoris?nbaffiche=8&numlinebeforefirst=0` , {
            headers: {
                'Content-Type': 'application/json' ,
                'Authorization': `Bearer ${token} `
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 200) {
                    setLoading(false)
                    setFavoris_all(data.data);
                    console.log("what asas  " + data.data)
                } else {
                    if(data.status === 201){
                        setLoading(false)
                        setFavoris_all([])
                    }
                }
            })
            .catch(error => {
                localStorage.removeItem('token')
                navigate('/login')
            });
    }, [token , navigate])
    var count_data = Favoris_all.length
    return (
        <div className="content-data">
            <Header />
            <div className="favorie">
                {
                    Isloading ? <CardSekeleton /> :
                    <>
                        {
                            count_data === 0 ? <div className='nodata'>
                                <img src={nodata} alt="..." />
                            </div> :
                            Favoris_all.map((item, index) => (
                                <Card key={index} object_annonce={item} />
                            ))
                        }
                    </>
                }
            </div>
            <Footer />
        </div>
    )
}
export default Favoris