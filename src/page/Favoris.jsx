
import Header from '../component/Header'
import '../assets/scss/styles.css'
import Footer from '../component/Footer'
import '../assets/fontawesome-5/css/all.min.css'
import CardFavoris from '../component/CardFavoris'
import Occasion from '../assets/image/occasion.jpg'
import { useState } from 'react'
function Favoris(){
    const [countdata , setdata] = useState([1,2,3,4]);
    return (
        <div className="content-data">
        <Header />
            <div className="favorie">
                {
                    countdata.map((item , index) =>(
                        <CardFavoris key={index} object_annonce={Occasion} />
                    ))
                }
            </div>
        <Footer />
        </div>
    )
}
export default Favoris