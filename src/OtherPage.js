import React , { useEffect, useState }  from 'react';
import axios from 'axios';
import './css/Annonce.css'
import annonce_img from './image/techzara.png' 
import { useInView } from 'react-intersection-observer';
import Annonce_component from './Annonce_component';
function OtherPage(token){
    const [Annonnce , setAnnonnce] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5003/Calendar/annonce')
            .then(response=>response.json())
            .then(data=>{
                setAnnonnce(data);
            })
            .catch(error=>{
                console.log("errorr")
            });
    } , []);
    console.log(Annonnce)
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    const data = ["salut" , "saaa"];
    return (
        <div className="col-10" >
            <div className={`box ${isVisible ? 'slide-down' : ''} container-fluid all_annonce`} >
                {
                    Annonnce.map((item) => (
                        <Annonce_component arg={item}  token={token.tokenEmail}/>
                    ))
                }
            </div>   
        </div>   
    ); 
}
export default OtherPage;