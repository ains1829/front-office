import React ,  { useEffect, useState } from 'react';
import axios from 'axios';
import Content from './Content';
import'./css/style.css'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import QuestionForm from './QuestionForm';
import Direction from './Direction';
import ListePersonnele from './ListePersonnele';
import DemandeConger from './DemandeConger';
function Menu(tokenEmail){
    console.log("ito le token na email -= " + tokenEmail.token)
    const id = tokenEmail.token ;
    console.log("i = " + id)
    const [idusers , setIdusers] =useState(0);
    useEffect(()=>{
        fetch('http://localhost:5003/Calendar/idusers?token='+id)
            .then(response=>response.json())
            .then(data=>{
                setIdusers(data.usersIDD);
                console.log("uhuhuh" +  data.usersIDD)
            })
            .catch(error=>{
                console.log("errorr")
            });
    }); 
    console.log("val = " + idusers)
    const [Exist , SetExist] =useState(0);
    useEffect(()=>{
        fetch('http://localhost:5003/Calendar/isexist?idusers='+idusers)
            .then(response=>response.json())
            .then(data=>{
                SetExist(data.existID);
            })
            .catch(error=>{
                console.log("errorr")
            });
    }); 
    
    console.log("id == " +  Exist) 
    return (
        id==="andy@gmail.com"?
        <Router>
            <div className="container-fluid box">
                <div className='row align-items-start'>
                        <div className='col-2 menu'>
                            <ul>
                                <div className='row'>
                                    <li>
                                        <Link to="/">Besoin</Link>
                                    </li>
                                </div>
                                <div className='row'>
                                    <li>
                                        <Link to="/page">Annonce</Link>
                                    </li>
                                </div>
                                <div className='row'>
                                    <li>
                                        <Link to="/direction">Liste Personnel</Link>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    <Routes>
                        <Route path="/" exact element={ <Content />} />
                        <Route path="/page" element={ < OtherPage tokenEmail = {id} />} />
                        <Route path="/direction" element={ <Direction /> } />
                        <Route path="/question" element={ < QuestionForm />} />
                        <Route path="/liste" element={ < ListePersonnele />} />
                    </Routes>
                </div>
            </div>
        </Router>
        :
        <Router>
            <div className="container-fluid box">
                <div className='row align-items-start'>
                        <div className='col-2 menu'>
                            <ul>
                                <div className='row'>
                                    <li>
                                        <Link to="/">Annonce</Link>
                                    </li>
                                </div>
                                <div className='row'>
                                    {
                                        Exist != 0 ? <li> <Link to="/demandeconger">Demande Conger</Link> </li> : null
                                    }
                                </div>
                            </ul>
                        </div>
                    <Routes>
                        <Route path="/" exact element={ <OtherPage tokenEmail = {id}/>} />
                        <Route path="/demandeconger" element={ <DemandeConger iduser={idusers}/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default Menu;
