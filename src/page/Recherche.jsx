import Footer from "../component/Footer"
import FormRecherche from "../component/FormRecheche"
import Header from "../component/Header"
import Occasion from '../assets/image/occasion.jpg'
import { useState } from 'react'
import '../assets/scss/Recherche.css'
import '../assets/scss/styles.css'
import Card from "../component/Card"
function Recherche(){
    const [countdata , setdata] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [totalComponents, setTotalComponents] = useState(6);
    const [componentsPerPage, setComponentsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastComponent = currentPage * componentsPerPage;
    const currentData = countdata.slice(0, indexOfLastComponent);
    console.log(countdata)
    const hanldeButton = () =>{
        setTotalComponents(totalComponents + 6);
        setCurrentPage(Math.ceil((totalComponents + 6) / componentsPerPage));
    }
    return(
        <div className="content-data">
            <Header />
            <div className="formulaire">
                    <FormRecherche />
                <div className="content-annonce">
                    <div className="Annonce">
                    {currentData.map((item, index) => (
                        <Card key={index} object_annonce={Occasion} />
                    ))}
                    </div>
                    <div className='add' onClick={hanldeButton}> <i className='fas fa-plus'></i>  <span>voir plus</span> </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Recherche