import Header from '../component/Header'
import '../assets/scss/Card.css'
import '../assets/scss/styles.css'
import Affiche from '../component/Affiche'
import Card from '../component/Card'
import Occasion from '../assets/image/occasion.jpg'
import { useState } from 'react'
import Footer from '../component/Footer'
function Acceuils(){
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
    return (
        <div className='content-data'>
            <Header />
            <div className='content-affiche'>
                <Affiche />
            </div>
            <div className='Annonce'>
                {currentData.map((item, index) => (
                    <Card key={index} object_annonce={Occasion} />
                ))}
            </div>
            <div className='add' onClick={hanldeButton}> <i className='fas fa-plus'></i>  <span>voir plus</span> </div>
            <Footer />
        </div>
        
    )
}
export default Acceuils