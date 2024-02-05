
import Header from '../component/Header'
import '../assets/scss/styles.css'
import Footer from '../component/Footer'
import '../assets/fontawesome-5/css/all.min.css'
import Occasion from '../assets/image/occasion.jpg'
import { useState } from 'react'
import Card from '../component/Card'
import CardSekeleton from '../component/CardSekeleton'
import nodata from '../assets/image/9169253.jpg'
function Favoris() {
    const countdata = [] 
    const [Isloading , setLoading] = useState(true) ;
    setTimeout(() =>{
        setLoading(false)
    },10000)
    var count_data = countdata.length
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
                            countdata.map((item, index) => (
                                <Card key={index} object_annonce={Occasion} />
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