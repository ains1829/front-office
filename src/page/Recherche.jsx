import Footer from "../component/Footer"
import FormRecherche from "../component/FormRecheche"
import Header from "../component/Header"
import Occasion from '../assets/image/occasion.jpg'
import { useState } from 'react'
import '../assets/scss/Recherche.css'
import '../assets/scss/styles.css'
import Card from "../component/Card"
import nodata from '../assets/image/9169253.jpg'
import CardSekeleton from "../component/CardSekeleton"
function Recherche(){
    const [countdata , setdata] = useState([]);
    const [Isloading , setLoading] = useState(true)
    const [totalComponents, setTotalComponents] = useState(8);
    const [componentsPerPage, setComponentsPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastComponent = currentPage * componentsPerPage;
    const currentData = countdata.slice(0, indexOfLastComponent);
    console.log(countdata)
    const hanldeButton = () =>{
        setTotalComponents(totalComponents + 8);
        setCurrentPage(Math.ceil((totalComponents + 8) / componentsPerPage));
    }
    setTimeout(()=>{
        setLoading(false)
    },10000)
    return(
        <div className="content-data">
            <Header />
            <div className="formulaire">
                    <FormRecherche />
                <div className="content-annonce">
                    <div className="Annonce">
                        {
                            Isloading ? <CardSekeleton /> : 
                            <>
                                {
                                    countdata.length === 0 ? <div className="nodata">
                                        <img src={nodata} alt="..." />
                                    </div> : 
                                    currentData.map((item, index) => (
                                        <Card key={index} object_annonce={Occasion} />
                                    ))
                                }
                            </>
                        }
                    </div>
                    {
                        countdata.length === 0 ? '' : <>
                            {
                                Isloading ? '' :
                                <>
                                    <div className='pagination'>
                                        <div className='previsous' onClick={hanldeButton}>  <span>Previous</span>  <i className='fas fa-arrow-left'></i></div>
                                        <div className='add' onClick={hanldeButton}> <i className='fas fa-arrow-right'></i>  <span>Next </span> </div>
                                    </div>
                                </>
                            }
                        </>
                    }
                        
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Recherche