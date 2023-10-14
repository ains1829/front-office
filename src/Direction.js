import React ,  { useEffect, useState } from 'react';
import { Link, Route, Routes , useLocation} from 'react-router-dom';
import QuestionForm from './QuestionForm';
import Menu from './Menu';
import './css/direction.css';
function Direction(){
    const [Direction , SetDirection] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5003/Calendar/Direction')
            .then(response=>response.json())
            .then(data=>{
                SetDirection(data);
            })
            .catch(error=>{
                console.log("errorr")
            });
    } , []);  
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return(
        <div className='col-10'>
            <span className='choose'>Choose Departement</span>
            <div className={`box ${isVisible ? 'slide-down' : ''} container-fluid direction`}>
                <div className='row'>
                    {
                        Direction.map((item)=>(
                            <div className='col-3 direction_affiche'>
                                <span key={item.idDirection}> 
                                <Link to={`/liste?id=${item.idDirection}`}>{item.nameDirection}</Link>
                                </span>
                            </div>
                        ))
                    }
                </div>   
            </div>
        </div>
    );
}
export default Direction;