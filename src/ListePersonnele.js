import React ,  { useEffect, useState } from 'react';
import { Link, Route, Routes , useLocation} from 'react-router-dom';
import './css/liste.css';
function ListePersonnele(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const [Personelle , SetPersonelle] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5003/Calendar/Personelle?map='+id)
            .then(response=>response.json())
            .then(data=>{
                SetPersonelle(data);
            })
            .catch(error=>{
                console.log("errorr")
            });
    } , []); 
    console.log(Personelle)
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return(
        <div className='col-10'> 
            <div className={`box ${isVisible ? 'slide-down' : ''} container-fluid Listepersonelle`}>
                <table>
                    <tr>
                        <th>Matricule</th>
                        <th>Nom</th>
                        <th>Genre</th>
                        <th>Email</th>
                        <th>Date Naissance</th>
                        <th>Nom service</th>
                        <th>Date embauche</th>
                        <th>Actif</th>
                    </tr>
                    {
                        Personelle.map((item)=>(
                            <tr className='conData' key={item.idpersonnel}>
                                <td>{item.matricule}</td>
                                <td>{item.names}</td>
                                <td>{item.genre}</td>
                                <td>{item.email}</td>
                                <td>{item.datenaissace}</td>
                                <td>{item.nomservice}</td>
                                <td>{item.date_embauche}</td>
                                {
                                    item.est_actif === true ? <td className='true'></td> : <td className='false'></td>
                                }
                            </tr>    
                        ))
                    }
                </table>
            </div>
        </div>
    );
}
export default ListePersonnele;